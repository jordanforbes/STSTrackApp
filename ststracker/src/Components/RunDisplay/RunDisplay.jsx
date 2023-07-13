import { useState, useEffect } from "react";

// import "./RunDisplay.css";

import RunCard from "./RunCard/RunCard";
import RunDetails from "./RunDetails/RunDetails";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState(false);
  const [date, setDate] = useState(false);
  const [masterDeck, setMasterDeck] = useState(false);
  const [relics, setRelics] = useState(false);

  const arrayConverter = (arr) => {
    return (
      arr
        // .substr(1, arr.length - 2)
        .split(", ")
        .map((card) => card)
    );
  };

  if (thisRun !== false) {
    setMasterDeck(arrayConverter(thisRun.master_deck));
    setRelics(arrayConverter(thisRun.relics));
  }
  // console.log(thisRun);

  return (
    <div className="container">
      <div className={`row ${thisRun ? "" : "detailsbg"}`}>
        <div className="col-md-2"></div>
        <div className={`col-md-9 ${thisRun ? "" : "scrollDiv"}`}>
          {thisRun ? (
            <RunDetails
              date={date}
              thisRun={thisRun}
              setThisRun={setThisRun}
              cardData={props.cardData}
              masterDeck={masterDeck}
              setMasterDeck={setMasterDeck}
              relics={relics}
              setRelics={setRelics}
            />
          ) : (
            props.runData
              .sort((a, b) => b.local_time - a.local_time)
              .map((run) => (
                <RunCard
                  date={date}
                  setDate={setDate}
                  runData={run}
                  setThisRun={setThisRun}
                  masterDeck={masterDeck}
                  setMasterDeck={setMasterDeck}
                  relics={relics}
                  setRelics={setRelics}
                />
              ))
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default RunDisplay;
