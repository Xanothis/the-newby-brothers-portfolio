import React from "react";
import styles from "./layout.module.scss";
import { Link } from "gatsby";

export default ({ children }) => {
    return (
        <div className={styles.root}>
            <div style={{ display: "flex" }}>
                <Link style={{ marginRight: 20 }} to="/">
                    Home
                </Link>
                <Link style={{ marginRight: 20 }} to="/about">
                    About
                </Link>
                <Link to="/gallery">Gallery</Link>
            </div>
            {children}
        </div>
    );
};
