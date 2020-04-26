import React from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";

const ProjectTemplate = ({ data }) => {
    console.log("Project Template", data);
    return (
        <Layout>
            <h1>{data.contentfulProjectContainer.title}</h1>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        contentfulProjectContainer(slug: { eq: $slug }) {
            title
            slug
            contentSlots {
                title
                numberOfColumns
                columnContent {
                    ... on ContentfulProjectTextContent {
                        id
                        content {
                            json
                        }
                        title
                    }
                    ... on ContentfulProjectColumnSection {
                        id
                        numberOfColumns
                        title
                        columnContent {
                            ... on ContentfulProjectTextContent {
                                id
                                title
                                content {
                                    json
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default ProjectTemplate;
