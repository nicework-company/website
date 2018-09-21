module.exports = {
  siteMetadata: {
    title: 'Nice Work Company',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nicework.company-website',
        short_name: 'nicework.company',
        start_url: '/',
        background_color: '#1B1464',
        theme_color: '#1B1464',
        display: 'minimal-ui',
        icon: 'src/images/icon.jpg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
