import RunCard from "./RunCard/RunCard";
import { useState, useEffect } from "react";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState({});
  console.log(thisRun);
  return (
    <div className="container">
      <div className="row">
        {thisRun.character
          ? "character: " + thisRun.character
          : "no run selected"}
      </div>
      <div className="row">
        {props.runData
          .sort((a, b) => b.local_time - a.local_time)
          .map((run) => (
            <RunCard data={run} setThisRun={setThisRun} />
          ))}
      </div>
    </div>
  );
};

export default RunDisplay;
