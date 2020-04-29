import React from "react";
import MainNav from "components/MainNav";
import PointerHand from "components/Svg/PointerHand";
import styles from "./index.module.scss";
import ProjectCards from "components/ProjectCards";

export default () => {
    return (
        <>
            <MainNav />
            <div className={styles.content}>
                <h1>
                    Welcome. We are the Newby Brothers and here you’ll find some examples of our passion for design and
                    user experience
                </h1>
                <PointerHand className={styles.pointerHandIcon} />
                <ProjectCards />
            </div>
        </>
    );
};
