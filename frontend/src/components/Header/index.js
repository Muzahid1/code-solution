import React from "react";
import "./css/index.css";


// import Avatar from "@mui/material/Avatar";


import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

function Header() {
  const user = useSelector(selectUser);
  
 

  
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/">
           <h2>code solution</h2>
          </Link>
          {/* <a href="/">
            
          </a> */}

         
        </div>
        
        <div className="header-right">
          <div className="header-right-container">
            

            <img
             alt=""
              src={user?.photo}
             
              onClick={() => auth.signOut()}
            />
            
            
            {/* <img
              src="https://symbols-electrical.getvecta.com/stencil_96/73_stack-exchange-icon.bbd1a14a04.svg"
              alt="stack-exchange"
            /> */}
          </div>
         
        </div>
      </div>
    </header>
  );
}

export default Header;
