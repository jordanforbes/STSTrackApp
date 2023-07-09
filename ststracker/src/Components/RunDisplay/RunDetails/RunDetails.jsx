import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CardBox from "./CardBox/CardBox";
// import "./RunDetails.css";

const RunDetails = (props) => {
  const thisDeck = [];
  let count = 0;

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

  const deckMap = {};
  const deckArr = [];

  // adds to deckMap obj which is structured as such: { card_id1: num, card_id2: num}
  masterDeck.forEach((card) => {
    count++;
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  console.log("deckmap");
  console.log(deckMap);

  // creates deckArr which has the format of [nX cardName(+1)], ex: [Bash+, 4x Strike_R]
  Object.keys(deckMap).forEach((card) => {
    const count = deckMap[card];
    let thisCard = card;

    deckArr.push(`${count > 1 ? count + "x" : ""} ${thisCard}`);
  });

  console.log("deckArr");
  console.log(deckArr);

  // searches for card information based on an entered card id
  const findCard = (card) => {
    let thisCard = "";

    const cardData = {
      name: "",
      upgrade: 0,
      count: 0,
      cardInfo: {},
    };
    if (card[card.length - 2] === "+") {
      // if there's only one upgrade, then only the plus is necessary, but more than one means the number should be there
      // basically only necessary for searing blow on basegame cards, but will become needed for mods
      cardData.upgrade = parseInt(card[card.length - 1]);

      thisCard = card.slice(0, card.length - 2);
    } else {
      thisCard = card;
    }

    let obj = props.cardData.find((cardObj) => cardObj.id === thisCard);
    cardData.name = obj.name;
    cardData.cardInfo = obj;

    return cardData;
  };

  masterDeck.map((dCard) => {
    thisDeck.push(findCard(dCard));
  });

  console.log("THISDECKTEST");
  console.log(thisDeck);

  const RelicBox = (props) => {
    return <div className="deckRelic">{props.relic}</div>;
  };

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
            <RelicBox relic={relic} />
          ))}
        </div>
        <div className="row">
          <div className="col-md-3">Cards in Deck: {count}</div>
        </div>
        <div className="row deckRow">
          <div className="col-md-12 scrollDivLight">
            {Object.entries(deckMap).map(([card]) => (
              <CardBox cardName={card} count={deckMap[card]} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
