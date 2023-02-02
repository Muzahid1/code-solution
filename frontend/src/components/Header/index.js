import React, { useState } from "react";
import "./css/index.css";
import Modal from 'react-modal';

// import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
// import PopupModel from "./PopupModel";
import { useSelector } from "react-redux";
import { selectUser } from "../../feature/userSlice";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Header() {
  let subtitle
  const user = useSelector(selectUser);

  const [open, setisopen] = useState(false)

  const Popup = () => {
    setisopen(true)
  }

  function closeModal() {
    setisopen(false)
  }

  function afterOpenModal() {
    subtitle.style.color = 'green';
  }

  function modalIsOpen() {

  }

  return (
    <header>
      <div className="header-container">
        <div className="header-left">

          <h2>code solution</h2>

          {/* <a href="/">
            
          </a> */}


        </div>

        <div className="header-right">
          <div className="header-right-container">


            <img
              onClick={Popup}
              src={user?.photo}


            />
            <Modal
              isOpen={open}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>your profile</h2>

              
              <div className="auth-detail" style={{ display: "flex", fontSize: "25px", flexDirection: "column", alignitems: "center" }}>
                <center><img style={{ height: "100px", width: "100px", borderRadius: "50%" }} src={user?.photo}></img></center>
                &nbsp;
                <p>hello {user?.displayName}</p>
                <p>Email : {user?.email}</p>
                <p>Uid : {user?.uid}</p>
                <button onClick={closeModal}>close</button>

                
              </div>

            </Modal>


          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
