import React from "react";
import CaseItemList from "./components/CaseItemList/CaseItemList";
import Header from "./components/Header/Header";
import ResultList from "./components/ResultList/ResultList";
import store from "./store";

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
