////////////////////////////////////////////////////////////
// Displays each card in the deck on the RunDetails component
////////////////////////////////////////////////////////////////

import { findCardData } from "../../../../utils";
import { Tooltip } from "react-tooltip";

import CardToolTip from "./CardToolTip/CardToolTip";

const CardBox = (props) => {
  const cardId = props.cardId;
  const count = props.count;
  const cardInfo = findCardData(cardId, props.cardData);
  let upgrade = "";

  const findUpgrade = (str) => {
    return str.match(/\((.*?)\)/g);
  };

  console.log("Name: " + cardInfo.name);
  console.log("og cost: " + cardInfo.cost);
  console.log("check Cost: " + findUpgrade(cardInfo.cost));
  console.log("og description: " + cardInfo.description);
  console.log("check description: " + findUpgrade(cardInfo.description));

  console.log(cardInfo);
  if (cardId[cardId.length - 2] === "+") {
    if (cardId[cardId.length - 1] !== "1") {
      upgrade = cardId.slice(cardId.length - 2, cardId.length);
    }
    upgrade = "+";
  }

  return (
    <>
      {/* <a className={`cardDesc ${cardInfo.id}`}> */}
      <div
        className={`deckCard ${
          cardInfo.rarity === "Rare"
            ? "rare"
            : cardInfo.rarity === "Uncommon"
            ? "uncommon"
            : "common"
        }`}
      >
        <span className={`cardName ${upgrade !== "" ? "upgradedTitle" : ""}`}>
          {cardInfo.name}
          {upgrade}
          <span className={`quantity`}>x{count} </span>
        </span>
        {/* <CardToolTip cardInfo={cardInfo} /> */}
        <br />
        <div className="cardType">{cardInfo.type}</div>
        <br />
        cost: {cardInfo.cost}
        <br />
        <br />
        {cardInfo.description}
      </div>
      {/* <Tooltip anchorSelect={`.${cardInfo.description}`} place="top">
          {cardInfo.description}
        </Tooltip>
      </a> */}
    </>
  );
};

export default CardBox;
