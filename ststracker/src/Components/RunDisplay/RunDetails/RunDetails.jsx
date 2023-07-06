import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const RunDetails = (props) => {
  const clearBtn = () => {
    props.setThisRun(false);
  };
  return (
    <>
      <div className="container">{props.thisRun.character}</div>
      <Button variant="primary" className="btn" onClick={clearBtn}>
        X
      </Button>
    </>
  );
};

export default RunDetails;
