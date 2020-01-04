require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: "Antony Budianto",
    description: "Blog of Antony Budianto",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/antonybudianto`
      },
      {
        name: `github`,
        url: `https://github.com/antonybudianto`
      }
    ],

    // Used for the title template on pages other than the index site
    siteTitle: `Antony Budianto`,
    // Default title of the page
    siteTitleAlt: `Antony Budianto`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Antony Budianto`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://antonybudianto.com`,
    // Used for SEO
    siteDescription: `Antony Budianto is software engineer and open-source contributor`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@antonybudianto`
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    // {
    //   resolve: `@lekoarts/gatsby-theme-cara`,
    //   options: {}
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Antony Budianto`,
        short_name: `Antony Budianto`,
        description: `Official Website of Antony Budianto`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
