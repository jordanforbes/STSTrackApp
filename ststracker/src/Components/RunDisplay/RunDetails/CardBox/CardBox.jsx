////////////////////////////////////////////////////////////
// Displays each card in the deck on the RunDetails component
// also links to the sts wiki
////////////////////////////////////////////////////////////////

import { findCardData, stsUrl } from "../../../../utils";

const CardBox = (props) => {
  const cardId = props.cardId;
  const count = props.count;
  const cardInfo = findCardData(cardId, props.cardData);
  let upgrade = "";

  // format the upgrade string
  if (cardId[cardId.length - 2] === "+") {
    if (cardId[cardId.length - 1] !== "1") {
      upgrade = cardId.slice(cardId.length - 2, cardId.length);
    }
    upgrade = "+";
  }

  return (
    <>
      <div
        className={`deckCard ${
          cardInfo.rarity === "Rare"
            ? "rare"
            : cardInfo.rarity === "Uncommon"
            ? "uncommon"
            : cardInfo.type === "Curse"
            ? "curse"
            : "common"
        }
          ${cardInfo.color.toLowerCase()}card`}
      >
        <a
          href={stsUrl(cardInfo.name)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div>
            <span
              className={`cardName ${upgrade !== "" ? "upgradedTitle" : ""}`}
            >
              {cardInfo.name}
              {upgrade}
            </span>
            <span className={`quantity`}>x{count} </span>
            <div className={`charColor `}>
              <div className={`cardType `}>{cardInfo.type}</div>
              <br />
              <div className="description">
                {cardInfo.cost ? (
                  <div className="costText"> Cost: {cardInfo.cost}</div>
                ) : (
                  ""
                )}
                <div className="descText">{cardInfo.description}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default CardBox;
