import { useState, useEffect } from "react";

// import "./RunDisplay.css";

import RunCard from "./RunCard/RunCard";
import RunDetails from "./RunDetails/RunDetails";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState(false);
  const [date, setDate] = useState(false);
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
            />
          ) : (
            props.runData
              .sort((a, b) => b.local_time - a.local_time)
              .map((run) => (
                <RunCard
                  date={date}
                  setDate={setDate}
                  data={run}
                  setThisRun={setThisRun}
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
