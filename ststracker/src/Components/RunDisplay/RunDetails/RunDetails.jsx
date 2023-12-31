////////////////////////////////////////////////
// Shows detailed description of each run
////////////////////////////////////////////////

import { Button } from "react-bootstrap";
import { arrayConverter } from "../../../utils";
import CardBox from "./CardBox/CardBox";
import RelicBox from "./RelicBox/RelicBox";
import ViewBox from "./ViewBox/ViewBox";
import NoteBox from "./NoteBox/NoteBox";

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

  const endClass = () => {
    return !props.thisRun.victory
      ? "died"
      : props.thisRun.heart_kill
      ? "heartkill"
      : "victory victoryPlate";
  };
  console.log(props.thisRun);

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
        <div className="row ">
          <div className="row ">
            <div className="col-md-2">{props.thisRun.character}</div>
            <div className="col-md-1">A{props.thisRun.ascension}</div>
            <div className="col-md-1"></div>

            <div className="col-md-6">
              <div className={`ending ${endClass()}`}>
                {!props.thisRun.victory
                  ? "Died on Floor " +
                    props.thisRun.floor +
                    " to " +
                    props.thisRun.killed_by
                  : props.thisRun.heart_kill
                  ? "Defeated the Heart!"
                  : "Victory!"}
              </div>
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
          </div>
          <div className="row cardCount">
            <div className="col-md-2">{props.date}</div>

            <div className="col-md-5"></div>
            <div className="col-md-4">Seed: {props.thisRun.seed}</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              Battles
              <ViewBox
                character={props.thisRun.character}
                damageTaken={props.thisRun.damage_taken}
              />
            </div>
            <div className="col-md-1 "></div>
            <div className="col-md-3 ">
              <div className="row ">Number of Relics: {relicCount}</div>
              <div className="row relicScroll">
                {relics.map((relic) => (
                  <RelicBox relicId={relic} relicData={props.relicData} />
                ))}
              </div>
            </div>
          </div>
          <div className="row"></div>
          <div className="row">
            <NoteBox notes={props.thisRun.notes} run_id={props.thisRun.id} />
          </div>
          <div className="row deckRow  ">
            <div className="col-md-12 ">
              <div className="row">Cards in Deck: {deckCount}</div>
              <div className="row">
                {Object.entries(deckMap).map(([card]) => (
                  <CardBox
                    character={props.thisRun.character}
                    cardId={card}
                    count={deckMap[card]}
                    cardData={props.cardData}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunDetails;
