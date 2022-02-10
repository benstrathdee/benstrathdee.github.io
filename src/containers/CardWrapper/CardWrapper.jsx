import React from "react";
import CardContent from "../CardContent/CardContent";
import CardListSkills from "../CardListSkills/CardListSkills";
import styles from "./CardWrapper.module.scss";

const CardWrapper = ({ listItems, title, selectable }) => {
    if (selectable) {
        // code for creating state variable activeItem
    }

    return (
        <div className={styles.CardWrapper}>
            <CardTitle title={title} />
            <CardListSkills listItems={listItems} selectable={selectable} />
            <CardContent />
        </div>
    );
};

export default CardWrapper;
