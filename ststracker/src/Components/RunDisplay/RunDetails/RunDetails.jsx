import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./RunDetails.css";

const RunDetails = (props) => {
  const [deckObj, setDeckObj] = useState({});
  // const [thisDeck, setThisDeck] = useState([]);
  const cardObjs = [];
  const thisDeck = [];
  const clearBtn = () => {
    props.setThisRun(false);
  };

  const reducedDeck = {};

  const arrayConverter = (arr) => {
    return arr
      .substr(1, arr.length - 2)
      .split(", ")
      .map((card) => card);
  };
  const masterDeck = arrayConverter(props.thisRun.master_deck);
  console.log(props.thisRun.master_deck);
  console.log(props.thisRun.master_deck.length);

  console.log(masterDeck);
  console.log(masterDeck.length);
  const relics = arrayConverter(props.thisRun.relics);

  const deckMap = {};
  const deckArr = [];

  masterDeck.forEach((card) => {
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  Object.keys(deckMap).forEach((card) => {
    const count = deckMap[card];
    let thisCard = card;

    deckArr.push(`${count > 1 ? count + "x" : ""} ${thisCard}`);
  });

  console.log("masterDeck map");
  masterDeck.map((dCard) => {
    let thisCard = "";
    let upGrade = "";
    console.log(dCard);
    console.log(dCard[dCard.length - 2]);
    if (dCard[dCard.length - 2] === "+") {
      console.log(dCard.length - 2, dCard.length - 1);
      upGrade = dCard.slice(dCard.length - 2, dCard.length);
      // console.log(dCard.slice(dCard.slice(0, dCard.length - 2)));
      console.log(upGrade);
      thisCard = dCard.slice(0, dCard.length - 2);
    } else {
      console.log("HIT ELSE");
      thisCard = dCard;
    }
    console.log("THISCARDTEST");
    console.log(thisCard);
    let obj = props.cardData.find((cardObj) => cardObj.id === thisCard);
    // cardObjs.push(obj);
    console.log("obj");
    console.log(obj);
    thisDeck.push(obj.name + upGrade);
  });

  cardObjs.map((card) => {
    if (card && "name" in card) {
      thisDeck.push(card.name);
    }
  });

  console.log("thisDeck");
  console.log(thisDeck);

  thisDeck.forEach((card) => {
    reducedDeck[card] = (reducedDeck[card] || 0) + 1;
  });

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
          {relics.map((relic) => (
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
