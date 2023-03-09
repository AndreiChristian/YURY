import React from "react";
import CaseItemList from "./components/CaseItemList/CaseItemList";
import Header from "./components/Header/Header";
import Results from "./components/Result/Results";
import ResultList from "./components/ResultList/ResultList";

const App = () => {
  return (
    <>
      <Header />
      <CaseItemList />
      <Results />
    </>
  );
};

export default App;
