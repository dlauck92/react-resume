import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import fetch from 'node-fetch';

const SendGrid_API_KEY = process.env.SG_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

if (!SendGrid_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in the environment variables.');
}
if (!RECAPTCHA_SECRET_KEY) {
  throw new Error('RECAPTCHA_SECRET_KEY is not defined in the environment variables.');
}

sgMail.setApiKey(SendGrid_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Verify reCAPTCHA token
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });
  const recaptchaResult = (await recaptchaResponse.json()) as { success: boolean };

  if (!recaptchaResult.success) {
    return res.status(400).json({ success: false, message: 'reCAPTCHA verification failed.' });
  }

  const msg = {
    to: 'drewlauck820@gmail.com',
    from: 'drewlauck820@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);

    if (error.response) {
      console.error('SendGrid response error:', error.response.body);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email.',
        error: error.response.body,
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Failed to send email.',
      error: error.message,
    });
  }
}