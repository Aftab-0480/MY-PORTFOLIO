import { 
  FaGithub, FaLinkedin, FaInstagram, FaEnvelope, 
  FaCode, FaTerminal, FaDatabase, FaLayerGroup, FaTools 
} from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import MMPng from '../assets/MM.png';
import VOTINGpng from "../assets/voting.png";
import weatherWisepng from "../assets/weatherWise.png";

// Cleaned up text colors to let our global stone styling handle standard hover transitions flawlessly
export const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Aftab-0480' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/aftabalam0480' },
  { name: 'GFG', icon: SiGeeksforgeeks, url: 'https://www.geeksforgeeks.org/profile/zeeshanayn2t?tab=activity' },
  { name: 'LeetCode', icon: SiLeetcode, url: 'https://leetcode.com/u/lowkey-coder' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/aftab0480/' },
  { name: 'Email', icon: FaEnvelope, url: 'mailto:zeeshananjum623@gmail.com' }
];

export const educationData = [
  {
    year: '2024 – Present',
    title: 'Bachelor of Technology (B.Tech)',
    institution: 'Indian Institute of Information Technology (IIIT) Bhagalpur',
    subtitle: 'B.Tech in Computer Science and Engineering',
    details: ['Data Structures & Algorithms', 'Full Stack Development', 'Backend Development', 'Databases', 'System Design']
  },
  {
    year: '2021 – 2023',
    title: 'Senior Secondary Education (Class XII)',
    institution: 'Senior Secondary School (Boys), AMU',
    subtitle: 'Aligarh, Uttar Pradesh | Science Stream',
    details: ['PCM Stream Focus', 'Foundation-level Computer Science principles']
  },
  {
    year: '2021',
    title: 'High School Education (Class X)',
    institution: 'STS High School (Minto Circle), AMU',
    subtitle: 'Aligarh, Uttar Pradesh',
    details: ['General Science & Mathematics foundational curriculum']
  }
];

export const skillsData = [
  {
    category: 'Programming Languages',
    icon: FaTerminal,
    skills: [
      { name: 'C++' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' }
    ]
  },
  {
    category: 'Frontend Development',
    icon: FaLayerGroup,
    skills: [
      { name: 'React' },
      { name: 'Tailwind CSS' },
      { name: 'Vite' }
    ]
  },
  {
    category: 'Backend & Databases',
    icon: FaDatabase,
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'REST APIs' },
      { name: 'MongoDB / Mongoose' }
    ]
  },
  {
    category: 'Tools & Ecosystem',
    icon: FaTools,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Postman' },
      { name: 'VS Code' }
    ]
  },
  {
    category: 'Currently Learning',
    icon: FaCode,
    skills: [
      { name: 'Docker' },
      { name: 'Linux' },
      { name: 'Redis' },
      { name: 'System Design' }
    ]
  }
];

export const projectsData = [
  {
    id: 1,
    title: 'Money Manager Dashboard',
    description: 'A comprehensive financial tracking system with an intuitive breakdown display for tracking net expenses, total monthly income, current balance balances, and transactional breakdowns via responsive visualization charts.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub'],
    image: MMPng,
    github: 'https://github.com/Aftab-0480/Money-manager',
    live: 'https://money-manager0480.vercel.app',
    featured: true
  },
  {
    id: 2,
    title: 'Weatherly Travel Planner',
    description: 'A dynamic geographical engine designed to query global locations, delivering optimized weather insight metrics for real-time trip coordinating profiles.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git'],
    image: weatherWisepng,
    github: 'https://github.com/Aftab-0480/weatherlyTravel',
    live: 'https://weatherly-india-omega.vercel.app',
    featured: false
  },
  {
    id: 3,
    title: 'CastVote - Digital Election Hub',
    description: 'An advanced secure electoral coordination board featuring dedicated live administrator privilege tools, metric analytics, ongoing candidate leaderboards, and safe user state submission logging.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git'],
    image: VOTINGpng,
    github: 'https://github.com/Aftab-0480/voting_app',
    live: 'https://voting-app-nine-mocha.vercel.app',
    featured: false
  }
];