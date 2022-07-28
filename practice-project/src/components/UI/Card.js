import React from "react";

import classes from './Card.module.css';

const Card = props => {

  console.log(props.ErrorModal);

  return (
    <div className={`${classes.card} ${props.children.props.className}`}>
      {props.children}
    </div>
  )
};

export default Card;
