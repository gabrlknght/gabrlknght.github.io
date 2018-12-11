const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Avik Nandy • Full Stack Developer', // Navigation and Site Title
  siteTitleAlt: 'Avik Nandy', // Alternative Site title for SEO
  siteUrl: 'https://gabrlknght.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Full-stack developer portfolio/blog of Avik Nandy',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@av1k', // Twitter Username
  ogSiteName: 'Harbinger Industries', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
