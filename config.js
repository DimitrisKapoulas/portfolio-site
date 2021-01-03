/* eslint-disable */
const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Dimitris';
const LAST_NAME = 'Kapoulas';
const GITHUB_USERNAME = 'DimitrisKapoulas';
const TWITTER_USERNAME = 'kapoulasdim';
const LINKEDIN_USERNAME = 'kapoulas-dimtris';
const PHONE_NUMBER = '(+30) 6986220328';
const ADDRESS = 'Athens';
const EMAIL = 'kapoulasd@gmail.com';
const FOOTER_URL = 'https: //dimitris-kapoulas.eu';

const BIO = `
      Currently working as BackEnd Engineer at Vodafone Greece since December 2019. Holding a Master of Engineering in Electrical & Computer
      Engineering from Democritus University of Thrace`;

const EXPERIENCE_LIST = [{
    title: 'BackEnd Engineer',
    company: 'Vodafone Greece',
    description: `
      Adding features and correcting bugs on Legacy codebase built with Oracle ATG, database imports and Oracle WCS CMS
      Developing microservices for Vodafone 's new Business Portal using Quarkus, MongoDB, Docker, Kubernetes, Jenkins 
      Systematic use of Git and Gitflow principles throughout the development lifecycle
      Analyzing existing microServices through JSON contract comparison and communication with FrontEnd Engineers `,
    period: 'December 2019 - present',
  },
  {
    title: 'Telecom Technician (University Internship)',
    company: 'Hellenic Telecommunications Organisation (OTE)',
    description: `
    Network efficiency inspections
    Network field tests
    Error identification localization and troubleshooting
    Operations in local businesses and companies
    `,
    period: 'July 2016 - September 2016',
  },
];

const EDUCATION_LIST = [{
  institution: 'Democritus University of Thrace Polytechnic School',
  qualification: 'M.Eng. in Electrical and Computer Engineering',
  description: `
    Thesis:Design and Development of Hybrid Cellular Automata and Applications
    of them. The aim of my thesis was to build models of complex systems,
    specifically Cellular Automata in order to apply them in problems where a
    self-replicating approach would been useful such as creating Pool Tiling
    Fractals or Arab-like Art. The initial implementation was done in Matlab and
    the final in Processing (a Java framework).
      `,
  period: 'September 2012 - April 2019',
}, ];

const LANGUAGES_AND_TOOLS = [{
    name: 'Java',
    iconClass: 'fa-java'
  },
  {
    name: 'NodeJS',
    iconClass: 'fa-node-js'
  },
  {
    name: 'Javascript',
    iconClass: 'fa-js-square'
  },
  {
    name: 'HTML',
    iconClass: 'fa-html5'
  },
  {
    name: 'CSS3',
    iconClass: 'fa-css3-alt'
  },
  {
    name: 'DBs',
    iconClass: 'fas fa-database'
  },
  {
    name: 'Linux',
    iconClass: 'fab fa-linux'
  },
  {
    name: 'Git',
    iconClass: 'fab fa-git-square'
  },
];

const SKILLS = [];

const PORTFOLIO = {
  introParagraphs: [
    `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      `,
    `
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt anim id est laborum.
      `,
  ],
  items: [{
      name: 'First portfolio item',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https: //github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https: //github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification 1',
  'Certification 2',
  'Certification 3',
  'Award 1',
  'Award 2',
];

module.exports = {
  siteTitle: `
      Dimitris Kapoulas Resume `,
  manifestName: `
      Dimitris Kapoulas Resume `,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/cto-ai.jpg',
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [{
      icon: 'fa-github',
      name: 'Github',
      url: `https: //github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https: //linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fa-twitter',
      name: 'Twitter',
      url: `https: //twitter.com/${TWITTER_USERNAME}`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};