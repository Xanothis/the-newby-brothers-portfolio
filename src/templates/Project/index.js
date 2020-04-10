import React from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";

export default ({ data }) => {
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
        }
    }
`;
