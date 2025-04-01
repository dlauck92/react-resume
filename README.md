# React Resume

## Overview
This is a **React-based resume website** designed to showcase my professional experience, skills, and projects in a sleek and interactive format. Built with **Next.js and Tailwind CSS**, this project serves as a digital portfolio.

## Features
- **Modern UI/UX** with Tailwind CSS for responsive design
- **Next.js framework** for optimized performance
- **Dynamic components** for easy updates and scalability
- **Social media links** with external navigation
- **Secure contact form** with Google reCAPTCHA v3 integration
- **API routes** for handling form submissions

## Tech Stack
- **Frontend:** Next.js (React), Tailwind CSS
- **Backend:** Next.js API routes
- **Email Service:** SendGrid
- **Spam Protection:** Google reCAPTCHA v3

## Installation & Setup
To run this project locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/dlauck92/react-resume.git
   cd react-resume
   ```

2. Install dependencies:
   ```sh
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```env
   SG_API_KEY=your-sendgrid-api-key
   RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
   ```

4. Start the development server:
   ```sh
   yarn dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage
- Customize content in `src/data/data.tsx` (e.g., portfolio items, contact info).
- Modify styles in `tailwind.config.js`.
- Update social links in `src/components/Sections/Contact/index.tsx`.

## Scripts
| Command           | Description                                   |
|--------------------|-----------------------------------------------|
| `yarn dev`        | Starts the development server.               |
| `yarn build`      | Builds the project for production.           |
| `yarn start`      | Starts the production server.                |
| `yarn lint`       | Runs ESLint to check for code issues.         |

## Contact
Feel free to connect with me:
- GitHub: [@dlauck92](https://github.com/dlauck92)
- LinkedIn: [Drew Lauck](https://www.linkedin.com/in/drew-lauck/)

