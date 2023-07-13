////////////////////////////////////////////////////////////////////////////////////////////////
// Shows each individual run on the RunDisplay component
////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Sparkle from "react-sparkle";
import { arrayConverter } from "../../../utils";

const RunCard = (props) => {
  const [thisDate, setThisDate] = useState("");
  const masterDeck = arrayConverter(props.data.master_deck);

  // formats the date
  useEffect(() => {
    var rawDate = String(props.data.local_time);
    setThisDate(
      rawDate.slice(4, 6) +
        "/" +
        rawDate.slice(6, 8) +
        "/" +
        rawDate.slice(0, 4)
    );
  }, []);

  const handleClick = () => {
    props.setThisRun(props.data);
    props.setDate(thisDate);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container" style={{ position: "relative" }}>
        {props.data.victory ? (
          <Sparkle
            color="#ffd700"
            className="victorySparkle"
            flicker={true}
            flickerSpeed="slowest"
            overflowPx={0}
            maxSize={5}
          />
        ) : (
          ""
        )}
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
                <p className="dateLabel">{thisDate}</p>
              </div>
              <div className="col-md-1"> A{props.data.ascension}</div>
              <div className="col-md-4">
                {props.data.victory
                  ? props.data.heart_kill
                    ? "VICTORY AGAINST THE HEART!"
                    : "VICTORY!"
                  : "Died on floor " +
                    props.data.floor +
                    " to " +
                    props.data.killed_by}
              </div>
              <div className="col-md-2">Deck Size: {masterDeck.length}</div>
              {/* <div className="col-md-2"></div> */}
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
      </div>
    </>
  );
};

export default RunCard;
