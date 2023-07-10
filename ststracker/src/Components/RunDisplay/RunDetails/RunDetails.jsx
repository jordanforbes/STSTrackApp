import { Button } from "react-bootstrap";
import { arrayConverter } from "../../../utils";
import CardBox from "./CardBox/CardBox";
import RelicBox from "./RelicBox/RelicBox";
// import "./RunDetails.css";

const RunDetails = (props) => {
  const masterDeck = arrayConverter(props.thisRun.master_deck);
  const relics = arrayConverter(props.thisRun.relics);

  // keeps track of how many of each card is in the deck
  // structure: { card_id1: num, card_id2: num}
  const deckMap = {};

  // the amount of cards in the deck
  let count = 0;

  // back button
  const clearBtn = () => {
    props.setThisRun(false);
  };

  // adds to deckMap obj
  masterDeck.forEach((card) => {
    count++;
    deckMap[card] = (deckMap[card] || 0) + 1;
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
