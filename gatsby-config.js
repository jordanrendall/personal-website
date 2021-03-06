require('dotenv').config({
  path: `.env`,
});
const { createProxyMiddleware } = require('http-proxy-middleware');
// const proxy = require('http-proxy-middleware')
module.exports = {
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http://localhost:8888',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    author: `Jordan Rendall`,
    twitterHandle: '@tjordanrendall',
    siteUrl: process.env.SITE_URL,
    menuLinks: [
      // {
      //   name: 'Home',
      //   link: '/',
      // },
      // {
      //   name: 'Blog',
      //   link: '/blog',
      // },
      {
        name: 'projects',
        link: '/projects',
      },
      // {
      //   name: 'Activities',
      //   link: '/activities',
      // },
      {
        name: 'connect',
        link: '/connect',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `other`,
        path: `${__dirname}/src/content/other`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              quality: 80,
              maxWidth: 1024,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.MANIFEST_NAME,
        short_name: process.env.MANIFEST_SHORTNAME,
        description: process.env.MANIFEST_DESCRIPTION,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/manifest-icon.png`,
        cache_busting_mode: `query`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
