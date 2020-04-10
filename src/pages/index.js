import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default ({ data }) => {
    console.log("data", data);
    return (
        <Layout>
            <h1>Welcome!</h1>
            {data.allContentfulProjectContainer.edges.map(edge => {
                return (
                    <div>
                        <h1>title: {edge.node.title}</h1>
                        <p>slug: {edge.node.slug}</p>
                    </div>
                );
            })}
        </Layout>
    );
};

export const query = graphql`
    query {
        allContentfulProjectContainer {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`;
