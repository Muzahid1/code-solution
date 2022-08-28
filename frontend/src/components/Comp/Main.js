import React from "react";
import "./css/Main.css";
import AllQuestions from "./AllQuestions";
// import axios from "axios";

function Main({ questions }) {
  // const [questions, setQuestions] = useState([]);

  // console.log(questions);
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2>All Questions</h2>
          

          {/* <a href="/add-question"> */}

          {/* </a> */}
        </div>
        <div className="main-desc">
          <p> total questions {questions.length}</p>
          <div className="main-filter">
           
            
          </div>
        </div>
        <div className="questions">
          {questions?.map((_q) => (
            <div className="question">
              <AllQuestions data={_q} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
