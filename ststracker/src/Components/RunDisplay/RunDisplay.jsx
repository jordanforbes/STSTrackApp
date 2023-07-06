import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import RunCard from "./RunCard/RunCard";
import RunDetails from "./RunDetails/RunDetails";

const RunDisplay = (props) => {
  const [thisRun, setThisRun] = useState(false);
  console.log(thisRun);

  return (
    <div className="container">
      <div className="row">
        {thisRun ? (
          <RunDetails thisRun={thisRun} setThisRun={setThisRun} />
        ) : (
          props.runData
            .sort((a, b) => b.local_time - a.local_time)
            .map((run) => <RunCard data={run} setThisRun={setThisRun} />)
        )}
      </div>
    </div>
  );
};

export default RunDisplay;
