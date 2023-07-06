import { useState, useEffect } from "react";

import "./RunDisplay.css";

import RunCard from "./RunCard/RunCard";
import RunDetails from "./RunDetails/RunDetails";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState(false);
  console.log(thisRun);

  return (
    <div className="container">
      <div className={`row ${thisRun ? "" : "detailsbg"}`}>
        <div className="col-md-2"></div>
        <div className={`col-md-9 ${thisRun ? "" : "scrollDiv"}`}>
          {thisRun ? (
            <RunDetails thisRun={thisRun} setThisRun={setThisRun} />
          ) : (
            props.runData
              .sort((a, b) => b.local_time - a.local_time)
              .map((run) => <RunCard data={run} setThisRun={setThisRun} />)
          )}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default RunDisplay;
