import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { arrayConverter } from "../../../utils";
import CardBox from "./CardBox/CardBox";
import RelicBox from "./RelicBox/RelicBox";
// import "./RunDetails.css";

const RunDetails = (props) => {
  const masterDeck = arrayConverter(props.thisRun.master_deck);
  const relics = arrayConverter(props.thisRun.relics);
  const thisDeck = [];
  const deckMap = {};

  // the amount of cards in the deck
  let count = 0;

  // back button
  const clearBtn = () => {
    props.setThisRun(false);
  };

  // adds to deckMap obj which is structured as such: { card_id1: num, card_id2: num}
  masterDeck.forEach((card) => {
    count++;
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  // console.log("deckmap");
  // console.log(deckMap);

  // searches for card information based on an entered card id
  const findCard = (card) => {
    let thisCard = "";

    const cardData = {
      name: "",
      upgrade: 0,
      count: 0,
      cardInfo: {},
    };

    // checks if card is upgraded and how many times
    // the number of times is really only applicable for searing blow and modded cards
    if (card[card.length - 2] === "+") {
      cardData.upgrade = parseInt(card[card.length - 1]);
      // it's necessary to slice the upgrade off of the id in order to search through the card list
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

  // console.log("THISDECKTEST");
  // console.log(thisDeck);

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
