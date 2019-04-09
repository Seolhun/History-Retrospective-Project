const users = [
  {
    caption: 'Hi-Cord',
    image: '/images/logo.png',
    infoLink: 'https://github.com/Seolhun',
    pinned: true,
    facebookComments: true,
    facebookAppId: '100007393233015',
  },
];

const siteConfig = {
  baseUrl: '/',
  defaultVersionShown: '1.0.0',
  noIndex: false,
  organizationName: 'hi-cord',
  projectName: 'SeolHun Tech Blog',
  projectName: 'seolhun.github.io',
  tagline: 'The Dreamer through the Programming',
  title: 'SeolHun Tech Blog',
  url: 'https://seolhun.github.io/',
  ogImage: 'images/logo.png',
  twitterImage: 'images/logo.png',
  // headerIcon: 'images/logo.png',
  footerIcon: 'images/logo.png',
  favicon: 'images/logo.png',
  colors: {
    primaryColor: '#2196F3',
    secondaryColor: '#2196F3',
  },
  headerLinks: [
    // {
    //   doc: 'doc1',
    //   label: 'Growth',
    // },
    {
      blog: true,
      label: 'Blog',
    },
    {
      page: 'me',
      label: 'Me',
    },
    // {
    //   page: 'help',
    //   label: 'Help',
    // },
  ],
  blogSidebarCount: 'ALL',
  blogSidebarTitle: { default: 'Recent posts', all: 'All Posts' },
  users,
  copyright: 'Copyright © ' + new Date().getFullYear() + ' SeolHun of Hi-Cord',
  gaTrackingId: 'UA-115545667-1',
  highlight: {
    theme: 'github',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
};

module.exports = siteConfig;
