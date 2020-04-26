import React from "react";
import { graphql } from "gatsby";
import MainNav from "components/MainNav";
import PointerHand from "components/Svg/PointerHand";
import styles from "./index.module.scss";

export default ({ data }) => {
    console.log("data", data);
    return (
        <>
            <MainNav />
            <div className={styles.content}>
                <h1>
                    Welcome. We are the Newby Brothers and here you’ll find some examples of our passion for design and
                    user experience
                </h1>
                <PointerHand className={styles.pointerHandIcon} />
            </div>
            {data.allContentfulProjectContainer.edges.map(edge => {
                return (
                    <div>
                        <h1>title: {edge.node.title}</h1>
                        <p>slug: {edge.node.slug}</p>
                    </div>
                );
            })}
        </>
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
