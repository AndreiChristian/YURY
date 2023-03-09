import React from "react";
import { useDispatch } from "react-redux";
import { caseItemsActions } from "../../store/caseItems";
import classes from "./CaseItem.module.css";

const CaseItem = ({ id, name, price, probability }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(caseItemsActions.removeCaseItem(id));
  };

  return (
    <div className={classes.container}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{probability}</div>
      <div onClick={handleDelete}>X</div>
    </div>
  );
};

export default CaseItem;
