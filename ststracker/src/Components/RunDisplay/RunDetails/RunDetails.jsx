////////////////////////////////////////////////
// Shows detailed description of each run
////////////////////////////////////////////////

import { Button } from "react-bootstrap";
import { arrayConverter } from "../../../utils";
import CardBox from "./CardBox/CardBox";
import RelicBox from "./RelicBox/RelicBox";

const RunDetails = (props) => {
  const masterDeck = arrayConverter(props.thisRun.master_deck);
  const relics = arrayConverter(props.thisRun.relics);

  // keeps track of how many of each card is in the deck
  // structure: { card_id1: num, card_id2: num}
  const deckMap = {};

  // the amount of cards in the deck
  let deckCount = 0;
  let relicCount = 0;

  // back button
  const clearBtn = () => {
    props.setThisRun(false);
  };

  // counts how many cards and adds them to deckMap obj
  masterDeck.forEach((card) => {
    deckCount++;
    deckMap[card] = (deckMap[card] || 0) + 1;
  });

  // you don't need to count each relic because you can only have one of each in the basegame
  relics.forEach((relic) => {
    relicCount++;
  });

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
        <div className="row"></div>
        <div className="row deckRow scrollDivLight">
          <div className="col-md-6 ">
            <div className="row">Cards in Deck: {deckCount}</div>
            <div className="row">
              {Object.entries(deckMap).map(([card]) => (
                <CardBox
                  cardId={card}
                  count={deckMap[card]}
                  cardData={props.cardData}
                />
              ))}
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">Number of Relics: {relicCount}</div>
            {relics.map((relic) => (
              <RelicBox relicId={relic} relicData={props.relicData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
