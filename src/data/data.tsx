import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  // FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
// import profilepic from '../images/profilepic.jpg';
// import profileImg from '../images/headshot.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Drew Lauck | Resume',
  description: "A sleek and interactive React-based resume website showcasing my skills, experience, and projects. Built with React, Flask, and Tailwind CSS for a modern, responsive design.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Drew Lauck.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Technical Support Engineer</strong> with expertise in cloud infrastructure, DevOps automation, and system optimization. Currently seeking opportunities in <strong className="text-stone-100">Cloud Engineering, DevOps, or Technical Support</strong> roles.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I'm not troubleshooting systems or building solutions, you'll find me exploring new recipes, hiking with my dog Vito, or discovering the hidden gems of the{' '}
        <strong className="text-stone-100">Greater Cleveland area</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Drew_Lauck_Resume_TSE.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: '', // Remove the image
  description: `As a Technical Support Engineer turned Cloud enthusiast, I specialize in bridging the gap between complex infrastructure and practical solutions. My experience spans cloud platforms (AWS, Azure), automation tools, and enterprise systems like Active Directory and VMware.

I thrive on solving challenging problems, optimizing system performance, and helping teams implement scalable, secure solutions. Whether it's debugging production issues or architecting cloud workflows, I bring both technical expertise and clear communication to every project.`,
  aboutItems: [
    {label: 'Location', text: 'Westlake, OH', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Study', text: 'Case Western Reserve - Coding Bootcamp', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for work', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Cooking, Reading, Video Games, Hiking', Icon: SparklesIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Cloud & Infrastructure',
    skills: [
      {
        name: 'AWS',
        level: 8,
      },
      {
        name: 'Azure',
        level: 5,
      },
      {
        name: 'Google Cloud',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'TypeScript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Rust',
        level: 5,
      },
    ],
  },
  {
    name: 'DevOps & Automation',
    skills: [
      {
        name: 'Docker',
        level: 7,
      },
      {
        name: 'CI/CD',
        level: 6,
      },
      {
        name: 'Infrastructure as Code',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'SpaceX Rocket Launches',
    description: 'A React application built with Apollo GraphQL to fetch and display real-time SpaceX launch data. Features responsive design and interactive filtering capabilities.',
    url: 'https://github.com/dlauck92/react-apollo-graphql-spacex',
    image: porfolioImage1,
  },
  {
    title: 'Lambda Image Resizer',
    description: 'A lightweight, serverless image processing tool built with AWS Lambda and Sharp. It automatically resizes images uploaded to an S3 bucket and saves the optimized output to a destination bucket—scalable, efficient, and fully cloud-native.',
    url: 'https://github.com/dlauck92/lambda-image-resizer',
    image: porfolioImage2,
  },
  {
    title: 'Weather Application',
    description: 'A responsive weather application built with React, Bootstrap, and the National Weather Service API. Provides real-time weather updates and forecasts with a Python Flask backend for enhanced data processing.',
    url: 'https://github.com/dlauck92/weather-app',
    image: porfolioImage3,
  },
  {
    title: '100 Days of Code',
    description: 'A comprehensive Python learning journey covering fundamentals to advanced concepts. Demonstrates consistent skill development and hands-on project experience through daily coding challenges.',
    url: 'https://github.com/dlauck92/100-days-of-code',
    image: porfolioImage4,
  },
  {
    title: 'AWS Cost Explorer Dashboard',
    description: 'An interactive dashboard built with AWS services to visualize and analyze cloud cost and usage data. Helps organizations optimize their cloud spending through detailed insights and reporting.',
    url: 'https://github.com/dlauck92/aws-cost-dash',
    image: porfolioImage5,
  },
  {
    title: 'React Resume Website',
    description: 'A modern, responsive personal website built with React and Tailwind CSS. Features dynamic content, portfolio showcase, and optimized performance for showcasing professional experience and skills.',
    url: 'https://github.com/dlauck92/react-resume',
    image: porfolioImage6,
  },


];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2019',
    location: 'Case Western Reserve University',
    title: 'Coding Bootcamp',
    content: <p>Worked with peers to learn HTML, CSS, JavaScript and MERN stack.</p>,
  },
  {
    date: 'March 2011',
    location: 'Lima Central Catholic HS',
    title: 'High School',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2023 - September 2024',
    location: 'Delinea',
    title: 'Tier 2 Technical Support Engineer',
    content: (
      <p>
        Led Tier 2 technical support for enterprise clients, specializing in Azure Active Directory and Private Access Management solutions. Collaborated with development teams to resolve critical bugs, mentored new hires, and maintained high customer satisfaction scores while managing complex security implementations across diverse technology stacks including VMware, Slack, Datadog, and Salesforce.
      </p>
    ),
  },
  {
    date: 'March 2023 - October 2023',
    location: 'thunder::tech',
    title: 'SysOps Support Developer 2',
    content: (
      <p>
        Optimized system performance and identified improvement opportunities across multiple web applications. Conducted comprehensive security audits of infrastructure systems, developed automation scripts for routine IT tasks, and troubleshot production environment issues for Kentico, Umbraco, WordPress, and Sitefinity platforms. Created detailed technical documentation and implemented software patches while ensuring minimal operational disruption.
      </p>
    ),
  },
  {
    date: 'December 2022 - March 2023',
    location: 'thunder::tech',
    title: 'SysOps Support Developer',
    content: (
      <p>
        Managed comprehensive software license inventory and led QA testing initiatives for multiple applications. Developed technical documentation to optimize team processes, recommended and implemented hardware solutions to meet evolving business needs, and established best practices for system maintenance and support workflows.
      </p>
    ),
  },
  {
    date: 'August 2020 - December 2022',
    location: 'thunder::tech',
    title: 'Digital Support/.NET Developer',
    content: (
      <p>
        Coordinated incoming support requests and strategically distributed workload based on team expertise and priority levels. Resolved customer concerns through effective problem-solving and de-escalation techniques, while successfully handling multiple low to medium priority support requests to maintain high service quality standards.
      </p>
    ),
  },
  {
    date: 'September 2019 - June 2020',
    location: 'Water Bear Marketing',
    title: 'Developer',
    content: (
      <p>
        Developed and maintained complex web applications using HTML, CSS, JavaScript, and jQuery technologies. Performed comprehensive unit testing to ensure application functionality, integrated third-party libraries for enhanced features, and made data-driven decisions to align technology solutions with business objectives.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  // imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Let\'s Connect.',
  description: 'Whether you have a project in mind, want to discuss opportunities, or just want to chat about cloud technologies, I\'d love to hear from you!',
  items: [
    {
      type: ContactType.Email,
      text: 'drewlauck92@gmail.com',
      href: 'mailto:drewlauck92@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Cleveland, OH',
      href: 'https://www.google.com/maps/place/Cleveland,+OH/@41.4970614,-82.0355071,10z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Drew Lauck',
      href: 'https://www.linkedin.com/in/drew-lauck/',
    },
    {
      type: ContactType.Github,
      text: 'dlauck92',
      href: 'https://github.com/dlauck92',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dlauck92', target: '_blank', rel: 'noopener noreferrer'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/12227328/drew-lauck', target: '_blank', rel: 'noopener noreferrer'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/drew-lauck/', target: '_blank', rel: 'noopener noreferrer'},
];
