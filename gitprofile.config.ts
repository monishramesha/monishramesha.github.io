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
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['monishramesha/Strivers-Sheet','monishramesha/monishramesha.github.io','monishramesha/CLRNet'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['monishramesha/OpenWorld-DeepFakeAttribution', 'monishramesha/Blockchain-based-P2P-File-Sharing-System','monishramesha/OS-Migration-with-Music-Player-based-on-Caching-Algorithm', 'monishramesha/Multithreaded-Online-Quiz-System']
      },
    },
    external: {
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
    researchGate: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
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
    }
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
  ],/**
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },*/
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
