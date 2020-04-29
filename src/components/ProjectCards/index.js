import React, { useEffect, useRef, useState } from "react";
import styles from "./projectCards.module.scss";
import { useStaticQuery, graphql, Link } from "gatsby";

const BASE_WIDTH = 1338;
const BASE_HEIGHT = 456;

const calculateCardHeight = newWidth => Math.floor((BASE_HEIGHT / BASE_WIDTH) * newWidth);

const ProjectCards = () => {
    const [cardHeight, setCardHeight] = useState(0);
    const rootRef = useRef(null);
    const data = useStaticQuery(graphql`
        query {
            allContentfulProjectContainer {
                edges {
                    node {
                        title
                        aboutTextColor
                        backgroundColor
                        date
                        keywords
                        logoAndAboutColor
                        slug
                    }
                }
            }
        }
    `);
    useEffect(() => {
        const handleOnResize = () => {
            if (rootRef.current) {
                const newHeight = calculateCardHeight(rootRef.current.clientWidth);
                if (cardHeight !== newHeight) setCardHeight(newHeight);
            }
        };
        handleOnResize();
        window.addEventListener("resize", handleOnResize);
        return () => window.removeEventListener("resize", handleOnResize);
    }, [cardHeight]);
    return (
        <div className={styles.root} ref={rootRef}>
            {data.allContentfulProjectContainer.edges.map(edge => {
                const { slug, title, backgroundColor, date, keywords } = edge.node;
                return (
                    <Link key={slug} className={styles.card} to={`/project/${slug}`} style={{ height: cardHeight }}>
                        <div className={styles.cardBackground} style={{ backgroundColor: backgroundColor || "gray" }} />
                        <div className={styles.infoContainer}>
                            <div className={styles.dateAndTitle}>
                                <h2>{title}</h2>
                                {date && <h3>{date}</h3>}
                            </div>
                            {keywords && (
                                <ul>
                                    {keywords.map(keyword => (
                                        <li key={keyword}>{keyword}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ProjectCards;
