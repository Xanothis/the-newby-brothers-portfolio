const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const response = await graphql(
        `
            query {
                allContentfulProjectContainer {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `
    );
    response.data.allContentfulProjectContainer.edges.forEach(edge => {
        createPage({
            component: path.resolve("./src/templates/Project/index.js"),
            path: `/project/${edge.node.slug}`,
            context: {
                slug: edge.node.slug,
            },
        });
    });
};
