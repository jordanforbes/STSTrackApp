import { Tooltip } from "react-tooltip";

const CardToolTip = (props) => {
  // TODO: some of the tooltips work, some do not, and I have no idea why
  return (
    <>
      <a className={`${props.cardInfo.id}`}>?</a>
      <Tooltip anchorSelect={`.${props.cardInfo.id}`} place="top">
        {props.cardInfo.description}
      </Tooltip>
    </>
  );
};

export default CardToolTip;
