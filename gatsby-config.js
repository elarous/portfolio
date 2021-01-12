module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    "gatsby-transformer-inline-svg-v2",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/"
      },
    },
  ],
};
