import React from "react";
import styles from "./mainNav.module.scss";
import MainLogo from "components/Svg/MainLogo";
import AboutButton from "components/MainNav/components/AboutButton";

const MainNav = ({ logoFillColor }) => {
    return (
        <nav className={styles.root}>
            <MainLogo fill={logoFillColor} />
            <AboutButton />
        </nav>
    );
};

export default MainNav;
