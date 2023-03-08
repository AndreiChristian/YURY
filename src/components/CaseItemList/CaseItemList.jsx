import React from "react";
import CaseItem from "../CaseItem/CaseItem";
import { useSelector } from "react-redux";


const CaseItemList = () => {
    const caseItems = useSelector( state => state.caseItems.caseItems)
    console.log(caseItems)
  return (
    <div>
      {/* {caseItems.map((item) => (
        <CaseItem
          id={Math.random()}
          name={item.name}
          price={item.price}
          probability={item.probability}
        />
      ))} */}
    </div>
  );
};

export default CaseItemList;
