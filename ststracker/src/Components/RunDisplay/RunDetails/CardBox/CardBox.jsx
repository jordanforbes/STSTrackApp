////////////////////////////////////////////////////////////
// Displays each card in the deck on the RunDetails component
////////////////////////////////////////////////////////////////

import { findCardData } from "../../../../utils";
import CardToolTip from "./CardToolTip/CardToolTip";

const CardBox = (props) => {
  const cardId = props.cardId;
  const count = props.count;
  const cardInfo = findCardData(cardId, props.cardData);
  let upgrade = "";

  if (cardId[cardId.length - 2] === "+") {
    if (cardId[cardId.length - 1] !== "1") {
      upgrade = cardId.slice(cardId.length - 2, cardId.length);
    }
    upgrade = "+";
  }

  return (
    <div className="deckCard ">
      {count}x {cardInfo.name}
      {upgrade}
      <CardToolTip cardInfo={cardInfo} />
      <br />
      <div className="cardType">{cardInfo.type}</div>
    </div>
  );
};

export default CardBox;
