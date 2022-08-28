import React from "react";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="icon">
            <Link to="/"> <i class="fa-solid fa-house-user"></i></Link>
          </div>
          <div className="icon">
            <Link to="/add-question">
              <i class="fa-solid fa-plus"></i>
            </Link>
          </div>
          <div className="icon">
          <Link to="/auth">  <i class="fa-solid fa-user"></i> </Link>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Bottom;
