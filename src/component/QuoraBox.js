import React from "react";
import "../styles/QuoraBox.css";
import { Avatar } from "@material-ui/core";

function QuoraBox() {
  return <div className="quorabox">
    <div className="quoraBos__info">
        <Avatar></Avatar>
        <h5>Username</h5>
    </div>
    <div className="quoraBox__quora">
    <p>What is your question or Link ?</p>
    </div>

    </div>;
}

export default QuoraBox;
