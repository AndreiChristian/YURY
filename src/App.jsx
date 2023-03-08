import React from "react";
import CaseItemList from "./components/CaseItemList/CaseItemList";
import Header from "./components/Header/Header";
import ResultList from "./components/ResultList/ResultList";

const App = () => {
  return (
    <>
      <Header />
      <CaseItemList />
      <ResultList />
    </>
  );
};

export default App;
