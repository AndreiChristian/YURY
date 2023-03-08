import React from "react";
import classes from "./CaseItem.module.css";

const CaseItem = ({ name, price, probability }) => {
  return (
    <div className={classes.container}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{probability}</div>
    </div>
  );
};

export default CaseItem;
