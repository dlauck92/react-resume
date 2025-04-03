import sgMail from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';
import fetch from 'node-fetch';

const SG_API_KEY = process.env.SG_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// console.log('SG_API_KEY:', process.env.SG_API_KEY);

if (!SG_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in the environment variables.');
}
if (!RECAPTCHA_SECRET_KEY) {
  throw new Error('RECAPTCHA_SECRET_KEY is not defined in the environment variables.');
}

sgMail.setApiKey(SG_API_KEY);

interface SendGridError extends Error {
  response?: {
    body: unknown;
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({success: false, message: 'Method not allowed'});
  }

  const {name, email, message, recaptchaToken} = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({success: false, message: 'Missing required fields'});
  }

  // Verify reCAPTCHA token
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recaptchaResponse: any = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaResult = (await recaptchaResponse.json()) as { success: boolean };

  if (!recaptchaResult.success) {
    return res.status(400).json({success: false, message: 'reCAPTCHA verification failed.'});
  }

  const msg = {
    to: 'drewlauck820@gmail.com',
    from: 'drewlauck820@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({success: true, message: 'Email sent successfully!'});
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    if ((error as SendGridError).response) {
      console.error('SendGrid response error:', (error as SendGridError).response?.body);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email.',
        error: (error as SendGridError).response?.body,
      });
    }

    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send email.',
        error: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An unknown error occurred.',
    });
  }
}