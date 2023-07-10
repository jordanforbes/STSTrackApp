////////////////////////////////////////////////////////////
// Displays each card in the deck on the RunDetails page
////////////////////////////////////////////////////////////////

import { findCardData } from "../../../../utils";

const CardBox = (props) => {
  // const cardName = props.cardName;
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
    </div>
  );
};

export default CardBox;
