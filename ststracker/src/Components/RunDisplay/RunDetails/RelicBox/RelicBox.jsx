import { findRelicData } from "../../../../utils";

const RelicBox = (props) => {
  const relicId = props.relicId;
  const relicInfo = findRelicData(relicId, props.relicData);

  const url = (card) => {
    const cardName = card.replace(/ /g, "_");
    return `https://slay-the-spire.fandom.com/wiki/${cardName}`;
  };

  return (
    <a
      href={url(relicInfo.name)}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="deckRelic">{relicInfo.name}</div>
    </a>
  );
};

export default RelicBox;
