import React from "react";
import CaseItem from "../CaseItem/CaseItem";
import { useSelector } from "react-redux";
import NewProduct from "../newProduct/NewProduct";
import classes from "./CaseItemList.module.css";

const CaseItemList = () => {
  const caseItems = useSelector((state) => state.caseItems.caseItems);
  console.log(caseItems);
  return (
    <div className={classes.container}>
      <NewProduct />
      <div className={classes.header}>
        <div>NAME</div>
        <div>PRICE</div>
        <div>PROBABILY</div>
        <div>DELETE</div>
      </div>
      {caseItems.map((item) => (
        <CaseItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          probability={item.probability}
        />
      ))}
    </div>
  );
};

export default CaseItemList;
