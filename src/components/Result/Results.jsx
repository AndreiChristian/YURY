import React, { useState } from "react";
import { useSelector } from "react-redux";
import { simulate } from "../../functions/simulate";
import classes from "./Results.module.css";

const Results = () => {
  const caseItems = useSelector((state) => state.caseItems.caseItems);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  return (
    <div className={classes.container}>
      <div
        className={classes.button}
        onClick={() => {
          setShowResults(true);
          setResults(simulate(caseItems));
        }}
      >
        GENERATE RESULTS
      </div>
      {showResults && (
        <div className={classes.results}>
          <div>PROFIT MARGIN: {results.profitMargin}</div>
          <div>TOTAL COST: {results.totalCost}</div>
          <div>TOTAL PROFIT: {results.totalProfit}</div>
          <div>TOTAL WINNINGS: {results.totalWinnings}</div>
        </div>
      )}
    </div>
  );
};

export default Results;
