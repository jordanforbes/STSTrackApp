////////////////////////////////////////////////////////////////////
// Relic Buttons which link you to the sts fandom site
////////////////////////////////////////////////////////////////

import { findRelicData, stsUrl } from "../../../../utils";

const RelicBox = (props) => {
  const relicId = props.relicId;
  const relicInfo = findRelicData(relicId, props.relicData);

  return (
    <a
      href={stsUrl(relicInfo.name)}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="deckRelic">{relicInfo.name}</div>
    </a>
  );
};

export default RelicBox;
