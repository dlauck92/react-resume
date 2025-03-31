import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const { name, value } = event.target;
      setData({ ...data, [name]: value });
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!recaptchaToken) {
        alert('Please complete the reCAPTCHA.');
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data, recaptchaToken }),
        });

        if (response.ok) {
          alert('Message sent successfully!');
          setData(defaultData); // Reset form after successful submission
        } else {
          const errorData = await response.json();
          alert(`Failed to send message: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
    [data, defaultData, recaptchaToken],
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
      <ReCAPTCHA
        sitekey="6Ld7vAUrAAAAAHM87_hk0QFD2ur_UpuF0bUbekBG"
        onChange={(token) => setRecaptchaToken(token)}
        onExpired={() => setRecaptchaToken(null)} // Reset token if expired
      />
      <button
        aria-label="Submit contact form"
        className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
