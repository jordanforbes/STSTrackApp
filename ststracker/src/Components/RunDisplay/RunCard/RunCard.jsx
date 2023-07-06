import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./RunCard.css";

const RunCard = (props) => {
  const [date, setDate] = useState("");

  const arrayConverter = (arr) => {
    return arr
      .substr(1, arr.length - 2)
      .split(", ")
      .map((card) => card);
  };

  const masterDeck = arrayConverter(props.data.master_deck);

  useEffect(() => {
    var rawDate = String(props.data.local_time);
    setDate(
      rawDate.slice(4, 6) +
        "/" +
        rawDate.slice(6, 8) +
        "/" +
        rawDate.slice(0, 4)
    );
  }, []);

  const handleClick = () => {
    props.setThisRun(props.data);
  };
  console.log(props.data.character.toLowerCase());
  return (
    <>
      <div className="row">
        {/* <div className="col-md-2"></div> */}
        <div className="col-md-1"></div>
        <div
          className={`col-md-10 runcard ${props.data.character.toLowerCase()} ${
            props.data.victory ? "victory" : "failure"
          }`}
        >
          <div className="row">
            <div className="col-md-3 ">
              <p className="charLabel">{props.data.character}</p>
              <p className="dateLabel">{date}</p>
            </div>
            <div className="col-md-1"> A{props.data.ascension}</div>
            <div className="col-md-4">
              {props.data.victory
                ? props.data.heart_kill
                  ? "VICTORY AGAINST THE HEART!"
                  : "VICTORY!"
                : "Died at floor " +
                  props.data.floor +
                  " to " +
                  props.data.killed_by}
            </div>
            <div className="col-md-2">Deck Size: {masterDeck.length}</div>
            <div className="col-md-2">
              <Button
                onClick={handleClick}
                className={`detailsBtn ${
                  props.data.victory ? "vicBtn" : "failBtn"
                } `}
                variant="light"
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunCard;
