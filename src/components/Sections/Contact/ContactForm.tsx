import React, {FC, memo, useCallback, useMemo, useState} from 'react';
import {useGoogleReCaptcha} from 'react-google-recaptcha-v3';

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

  const {executeRecaptcha} = useGoogleReCaptcha();

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      setData({...data, [name]: value});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!executeRecaptcha) {
        setStatusMessage('reCAPTCHA is not available.');
        setStatusType('error');
        return;
      }

      const token = await executeRecaptcha('contact_form'); // Generate reCAPTCHA token

      if (!token) {
        setStatusMessage('Please complete the reCAPTCHA.');
        setStatusType('error');
        return;
      }

      setIsLoading(true);
      setStatusMessage(null); // Clear any previous status message

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({...data, recaptchaToken: token}),
        });

        if (response.ok) {
          setStatusMessage('Message sent successfully!');
          setStatusType('success');
          setData(defaultData); // Reset form after successful submission
        } else {
          const errorData = await response.json();
          setStatusMessage(`Failed to send message: ${errorData.message}`);
          setStatusType('error');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        setStatusMessage('An error occurred. Please try again.');
        setStatusType('error');
      } finally {
        setIsLoading(false);
      }
    },
    [data, defaultData, executeRecaptcha],
  );

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
      <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
      <input
        autoComplete="email"
        className={inputClasses}
        name="email"
        onChange={onChange}
        placeholder="Email"
        required
        type="email"
      />
      <textarea
        className={inputClasses}
        maxLength={250}
        name="message"
        onChange={onChange}
        placeholder="Message"
        required
        rows={6}
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>

      {/* Status Message */}
      {statusMessage && (
        <p
          className={`text-sm mt-2 ${
            statusType === 'success' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {statusMessage}
        </p>
      )}
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
