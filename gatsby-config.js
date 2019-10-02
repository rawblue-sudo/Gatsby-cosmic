module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: process.env.COSMIC_BUCKET || 'gatsby-blog-cosmic-js',
        objectTypes: ['posts','settings'],
        apiAccess: {
          read_key: process.env.COSMIC_READ_KEY || 'I4sVGSC6awDa6zA6QquN81C4SkMZrXKcYrB84Ju7fxwDCjqyeG',
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
