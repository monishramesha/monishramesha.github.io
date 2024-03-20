// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'monishramesha', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['monishramesha/Blockchain-based-P2P-File-Sharing-System', 'monishramesha/Multithreaded-Online-Quiz-System', 'monishramesha/OpenWorld-DeepFakeAttribution', 'monishramesha/Restaurant-Reservation-Application', 'monishramesha/Strivers-Sheet', 'monishramesha/Tours-and-Travel-Website'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
   
      ],
    },
  },
  seo: {
    title: 'Portfolio of Monish Ramesha',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'monish-ramesha',
    twitter: '',
    //mastodon: 'arifszn@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    //medium: 'arifszn',
    //dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    //website: 'https://www.arifszn.com',
    phone: '+91 8838672367',
    email: 'monishramesha@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/160nUuA3NKFJPOBgX61dabakjrS-AMYBy?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'Java',
    'Python',
    'PHP',
    'MySQL',
    'Oracle SQL',
    'Git',
    'HTML',
    'CSS'
    ],
  experiences: [
    {
      company: 'NGN Labs',
      position: 'Research Intern',
      from: 'June 2023',
      to: 'January 2024',
      companyLink: 'https://ngnlab.org',
    },
    
  ],
  educations: [
    {
      institution: 'Madras Institute of Technology',
      degree: 'B.E Computer Science Engineering',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Kendriya Vidyalaya Minambakkam',
      degree: 'CBSE High Schooling',
      from: '2009',
      to: '2021',
    }
  ],
  themeConfig: {
    defaultTheme: 'forest',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/monishramesha"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
