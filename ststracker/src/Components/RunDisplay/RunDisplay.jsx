////////////////////////////////////////////////////////////////
// Displays master list of all runs
////////////////////////////////////////////////////////////////

import { useState } from "react";

import RunCard from "./RunCard/RunCard";
import RunDetails from "./RunDetails/RunDetails";
// import ViewBox from "./RunDetails/ViewBox/ViewBox";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState(false);
  const [date, setDate] = useState(false);

  return (
    <div className="container runDisplayBox">
      <div className={`row ${thisRun ? "" : "detailsbg"}`}>
        <div className="col-md-2"></div>
        <div className={`col-md-9 ${thisRun ? "" : "scrollDiv"}`}>
          {thisRun ? (
            <RunDetails
              date={date}
              thisRun={thisRun}
              setThisRun={setThisRun}
              cardData={props.cardData}
              relicData={props.relicData}
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
