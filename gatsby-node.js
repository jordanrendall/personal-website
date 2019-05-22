/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`);

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    console.log(
      createFilePath({
        node,
        getNode,
        basePath: `src/content`,
        trailingSlash: false,
      })
    );
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/content`,
      trailingSlash: false,
    });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

// const path = require('path');

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

//   return graphql(`
//     {
//       allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         limit: 1000
//       ) {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {}, // additional data can be passed via context
//       });
//     });
//   });
// };
