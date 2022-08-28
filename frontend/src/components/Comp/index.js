import React, { useEffect, useState } from "react";
import Bottom from "./Bottom";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";

function Index() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)
      });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        
        <Main questions={questions} />
      <Bottom />
      </div>
    </div>
  );
}

export default Index;
