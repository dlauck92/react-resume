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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
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
        I'm a U.S. based <strong className="text-stone-100">Cloud Engineer</strong>, currently looking for work as a Cloud Engineer, DevOps Engineer or similar position.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I'm typically travelling,
        trying out new recipes, reading, or hiking with my dog Vito in the beautiful{' '}
        <strong className="text-stone-100">Greater Cleveland area</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  profileImageSrc: profilepic,
  description: `I'm Drew Lauck, a Cloud Engineer with a strong focus on DevOps, automation, and cloud infrastructure in Azure and AWS. I specialize in system optimization, access management, and debugging while leveraging tools like Active Directory, VMware, and Datadog.
  Passionate about scalability, security, and efficiency, I’m always exploring new technologies to improve cloud operations and streamline DevOps workflows.`,
  aboutItems: [
    {label: 'Location', text: 'Cleveland, OH', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'American', Icon: FlagIcon},
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
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
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
          Worked with Azure, Active Directory, Private Access Management systems, VMware, Slack, Datadog, macOS, Windows and SalesForce. Assisted customers via tickets or call to create/manage policies to provide least
          privileged access across their entire company to ensure security. Answered questions from team about cases, roadmaps and development issues.
          Helped development team investigate bugs and contribute to brainstorming for solutions.
          Assisted with training new hires by working with them on cases and invite to calls with clients.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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
