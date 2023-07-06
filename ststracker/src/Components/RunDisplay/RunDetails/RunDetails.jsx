import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./RunDetails.css";

const RunDetails = (props) => {
  const [deckObj, setDeckObj] = useState({});
  const clearBtn = () => {
    props.setThisRun(false);
  };

  const arrayConverter = (arr) => {
    return arr
      .substr(1, arr.length - 2)
      .split(", ")
      .map((card) => card);
  };
  const masterDeck = arrayConverter(props.thisRun.master_deck);

  // masterDeck.forEach((item) => {
  //   deckMap[item] = (deckMap[item] || 0) + 1;
  // });
  const deckMap = {};
  const deckArr = [];

  // Object.keys(deckMap).forEach((item) => {
  //   const count = deckMap[item];
  //   console.log(`${item} x${count})`);
  // });
  // console.log(deckMap);
  masterDeck.forEach((card) => {
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  Object.keys(deckMap).forEach((card) => {
    const count = deckMap[card];
    deckArr.push(`${card} x${count}`);
  });

  console.log(deckArr);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-4">{props.thisRun.character}</div>
          <div className="col-md-2">
            <Button variant="primary" className="btn" onClick={clearBtn}>
              X
            </Button>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row cardCount">Cards in Deck: {masterDeck.length}</div>
        <div className="row ">
          <div className="col-md-3 scrollDivLight">
            {deckArr.map((card) => (
              <p>{card}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
