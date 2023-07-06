import { useState, useEffect } from "react";
import "./RunCard.css";
import { Button } from "react-bootstrap";
const RunCard = (props) => {
  const [date, setDate] = useState("");

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
  return (
    <>
      <div className="row">
        <div className="col-md-2"></div>
        <div
          className={`col-md-10 runcard ${
            props.data.victory ? "victory" : "failure"
          }`}
        >
          <div className="row">
            <div className="col-md-2">{props.data.character} : </div>
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
            <div className="col-md-2">{date}</div>
            <div className="col-md-2">
              <Button
                onClick={handleClick}
                className={`detailsBtn ${
                  props.data.victory ? "vicBtn" : "failBtn"
                }`}
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
