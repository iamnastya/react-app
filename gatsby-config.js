module.exports = {
  siteMetadata: {
    title: 'My first React website',
    description: 'Some text',
    keywords: 'word01, word02, word03'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '7jcfgt0u6ddl',
        accessToken: '6JAKnL8WPEeYfIktl_wT_mmNoulGteFbhAgKef99gv4'
      }
    }
  ],
}
