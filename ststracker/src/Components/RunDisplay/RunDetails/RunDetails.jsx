import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./RunDetails.css";

// TODO: upgraded cards are not being added
const RunDetails = (props) => {
  const [deckObj, setDeckObj] = useState({});
  // const [thisDeck, setThisDeck] = useState([]);
  const cardObjs = [];
  const thisDeck = [];
  const reducedDeck = {};
  // props.setThisRun(true)
  // props.setMaterDeck(props.thisRun.master_deck)

  // return to previous page
  const clearBtn = () => {
    props.setThisRun(false);
  };

  // converts string of deck cards to array
  // const arrayConverter = (arr) => {
  //   return arr
  //     .substr(1, arr.length - 2)
  //     .split(", ")
  //     .map((card) => card);
  // };
  // const masterDeck = arrayConverter(props.thisRun.master_deck);
  // const relics =
  // masterDeck.forEach((item) => {
  //   deckMap[item] = (deckMap[item] || 0) + 1;
  // });
  const deckMap = {};
  const deckArr = [];
  console.log("RUN DETAILS!!!!!");
  // console.log(props.thisRun.master_deck);
  // Object.keys(deckMap).forEach((item) => {
  //   const count = deckMap[item];
  //   console.log(`${item} x${count})`);
  // });
  // console.log(deckMap);
  console.log("MASTERDECK");
  console.log(props.masterDeck);
  props.masterDeck.forEach((card) => {
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  Object.keys(deckMap).forEach((card) => {
    const count = deckMap[card];
    let thisCard = card;

    // thisCard[thisCard.length - 1] === "1"
    //   ? (thisCard = thisCard.slice(0, thisCard.length - 1))
    //   : "";

    deckArr.push(`${count > 1 ? count + "x" : ""} ${thisCard}`);
  });

  props.masterDeck.map((dCard) => {
    console.log("dCardCheck");
    console.log(dCard);
    let obj = props.cardData.find((cardObj) => cardObj.id === dCard);
    cardObjs.push(obj);
  });

  cardObjs.map((card) => {
    let card_id = card;
    let suffix = "";

    if (card && "name" in card) {
      thisDeck.push(card.name);
    }
  });

  console.log(thisDeck);

  thisDeck.forEach((card) => {
    reducedDeck[card] = (reducedDeck[card] || 0) + 1;
  });

  // const obj = {
  //   key1: "value1",
  //   key2: "value2",
  //   key3: "value3",
  // };
  // const mappedArray = Object.entries(obj).map(
  //   ([key, value]) => `${key}: ${value}`
  // );

  const readyArr = Object.entries(reducedDeck).map(
    ([card, count]) => `${count}x ${card}`
  );

  console.log(readyArr);
  console.log(Object.values(reducedDeck));
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
          {props.relics.map((relic) => (
            <div className="deckRelic">{relic}</div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-3">Cards in Deck: {thisDeck.length}</div>
        </div>
        <div className="row deckRow">
          <div className="col-md-12 scrollDivLight">
            {readyArr.map((card) => (
              <div className="deckCard ">{card}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
