import { findRelicData } from "../../../../utils";

const RelicBox = (props) => {
  const relicId = props.relicId;
  const relicInfo = findRelicData(relicId, props.relicData);

  return <div className="deckRelic">{relicInfo.name}</div>;
};

export default RelicBox;
