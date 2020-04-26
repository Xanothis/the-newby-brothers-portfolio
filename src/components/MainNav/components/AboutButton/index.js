import React from "react";
import styles from "./aboutButton.module.scss";

const AboutButton = ({ onClick, backgroundColor = "black", textColor = "white" }) => {
    return (
        <div className={styles.root}>
            <div
                className={styles.buttonBackground}
                style={{ backgroundColor, boxShadow: `0 -1px 0 0 ${textColor}` }}
            />
            <button type="button" className={styles.button} style={{ color: textColor }} {...{ onClick }}>
                About
            </button>
        </div>
    );
};

export default AboutButton;
