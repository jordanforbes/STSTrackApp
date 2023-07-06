import { useState, useEffect } from "react";
import "./RunCard.css";
const RunCard = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          className={`col-md-8 runcard ${
            props.data.victory ? "victory" : "failure"
          }`}
        >
          {props.data.character} :{" "}
          {props.data.victory
            ? props.data.heart_kill
              ? "VICTORY AGAINST THE HEART!"
              : "VICTORY!"
            : "Died at floor " +
              props.data.floor +
              " to " +
              props.data.killed_by}
        </div>
      </div>
    </>
  );
};

export default RunCard;
