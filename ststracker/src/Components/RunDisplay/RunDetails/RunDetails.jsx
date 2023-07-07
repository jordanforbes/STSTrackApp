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
  const relics = arrayConverter(props.thisRun.relics);

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
    let thisCard = card;
    card[card.length - 2] === "_"
      ? (thisCard = card.slice(0, card.length - 2))
      : card[card.length - 4] === "_"
      ? (thisCard = card.slice(0, card.length - 4) + "+1")
      : (thisCard = card);

    // thisCard[thisCard.length - 1] === "1"
    //   ? (thisCard = thisCard.slice(0, thisCard.length - 1))
    //   : "";

    deckArr.push(`${count > 1 ? count + "x" : ""} ${thisCard}`);
  });
  console.log(props.thisRun);
  console.log(deckArr);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2">{props.thisRun.character}</div>
          <div className="col-md-1">A{props.thisRun.ascension}</div>
          <div className="col-md-1"></div>

          <div className="col-md-6">
            {!props.thisRun.victory
              ? "Died on Floor " +
                props.thisRun.floor +
                " to " +
                props.thisRun.killed_by
              : props.thisRun.heart_kill
              ? "Defeated the Heart!"
              : "Victory!"}
          </div>
          <div className="col-md-2">
            <Button
              variant="outline-secondary"
              className="btn"
              onClick={clearBtn}
            >
              Back
            </Button>
          </div>
          <div className="row"></div>
        </div>
        <div className="row cardCount">
          <div className="col-md-2">{props.date}</div>

          <div className="col-md-5"></div>
          <div className="col-md-4">Seed: {props.thisRun.seed}</div>
        </div>
        <div className="row">Relics:</div>
        <div className="row">
          {relics.map((relic) => (
            <div className="deckRelic">{relic}</div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-3">Cards in Deck: {masterDeck.length}</div>
        </div>
        <div className="row deckRow">
          <div className="col-md-12 scrollDivLight">
            {deckArr.map((card) => (
              <div className="deckCard ">{card}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
