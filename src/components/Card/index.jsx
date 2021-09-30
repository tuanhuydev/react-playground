import React from "react";

const Card = (props) => {
    const { classes = 'card', children } = props;
    return (
        <div className={classes}>{children}</div>
    );
}

export default Card;