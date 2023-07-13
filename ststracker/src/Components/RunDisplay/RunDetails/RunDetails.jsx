import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import CardBox from "./CardBox/CardBox";
// import "./RunDetails.css";

// TODO: upgraded cards are not being added
const RunDetails = (props) => {
  const thisDeck = [];
<<<<<<< HEAD
  let count = 0;

=======
  const reducedDeck = {};
  // props.setThisRun(true)
  // props.setMaterDeck(props.thisRun.master_deck)

  // return to previous page
>>>>>>> 66a1a4d44d9578685947271ff02f0929fac48c5f
  const clearBtn = () => {
    props.setThisRun(false);
  };

<<<<<<< HEAD
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
=======
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
>>>>>>> 66a1a4d44d9578685947271ff02f0929fac48c5f
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

<<<<<<< HEAD
  console.log("deckArr");
  console.log(deckArr);

  const findCard = (card) => {
    let thisCard = "";
    let upgrade = "";

    const cardData = {
      id: "",
      name: "",
      upgrade: 0,
      cost: "",
      type: "",
      color: "",
      description: "",
      rarity: "",
      count: 0,
    };
    if (card[card.length - 2] === "+") {
      // if there's only one upgrade, then only the plus is necessary, but more than one means the number should be there
      // basically only necessary for searing blow on basegame cards, but will become needed for mods
      if (card[card.length - 1] === "1") {
        upgrade = "+";
      } else {
        upgrade = card.slice(card.length - 2, card.length);
      }

      thisCard = card.slice(0, card.length - 2);
    } else {
      thisCard = card;
=======
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
>>>>>>> 66a1a4d44d9578685947271ff02f0929fac48c5f
    }

    let obj = props.cardData.find((cardObj) => cardObj.id === thisCard);
    // pushes to deck, remove this
    // thisDeck.push(obj.name + upgrade);
  };

  masterDeck.map((dCard) => {
    findCard(dCard);
  });

  const RelicBox = (props) => {
    return <div className="deckRelic">{props.relic}</div>;
  };

<<<<<<< HEAD
=======
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
>>>>>>> 66a1a4d44d9578685947271ff02f0929fac48c5f
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
<<<<<<< HEAD
          {relics.map((relic) => (
            <RelicBox relic={relic} />
=======
          {props.relics.map((relic) => (
            <div className="deckRelic">{relic}</div>
>>>>>>> 66a1a4d44d9578685947271ff02f0929fac48c5f
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
