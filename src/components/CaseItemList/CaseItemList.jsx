import React from "react";
import CaseItem from "../CaseItem/CaseItem";

const caseItems = [
  { name: "Item 1", price: 10, probability: 0.1 },
  { name: "Item 2", price: 20, probability: 0.05 },
  { name: "Item 3", price: 0, probability: 0.85 },
];

const CaseItemList = () => {
  return (
    <div>
      {caseItems.map((item) => (
        <CaseItem
          id={Math.random()}
          name={item.name}
          price={item.price}
          probability={item.probability}
        />
      ))}
    </div>
  );
};

export default CaseItemList;
