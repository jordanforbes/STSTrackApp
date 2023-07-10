import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { arrayConverter, findCard } from "../../../utils";
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

  // TODO: check if card is already in thisDeck, and if so, don't push a new one and then add to the count.
  // TODO: needs to check if it's also upgraded
  masterDeck.map((dCard) => {
    let upgrade = 0;
    let card_id = "";

    if (dCard[dCard.length - 2] === "+") {
      upgrade = parseInt(dCard[dCard.length - 1]);
      // it's necessary to slice the upgrade off of the id in order to search through the card list
      card_id = dCard.slice(0, dCard.length - 2);
    } else {
      card_id = dCard;
    }
    console.log("masterdeck map", dCard);

    thisDeck.push(findCard(dCard, props.cardData));
  });

  console.log("THISDECKTEST");
  console.log(thisDeck);

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
              <CardBox
                cardId={card}
                count={deckMap[card]}
                cardData={props.cardData}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
