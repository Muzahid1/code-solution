import React from "react";
import Bottom from "../Comp/Bottom";
import "./index.css";
import MainQuestion from "./MainQuestion";

function Index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
       
        <MainQuestion />
        <Bottom />
      </div>
    </div>
  );
}

export default Index;
