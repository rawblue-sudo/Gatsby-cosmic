# Gatsby + Cosmic JS

![gatsby-blog-cosmicjs](static/thumbnail.png "The index page of the starter blog")


## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Install

``` bash
# Make sure that you have the Gatsby CLI program installed
npm install --global gatsby-cli

# run from your CLI
gatsby new gatsby-example-blog https://github.com/jazibsawar/gatsby-blog-cosmicjs
```
In `gatsby-config.js` you need to add configuration for your Cosmic JS Bucket

``` javascript
{
  resolve: 'gatsby-source-cosmicjs',
  options: {
    bucketSlug: '', /* bucket slug */
    objectTypes: ['posts', 'settings'], /* object slugs you want to populate */
    apiAccess: {
      read_key: '', /* optional */
    }
  }
},
```

Then

``` bash
# Then you can run it by
cd gatsby-example-blog
npm run develop
```
