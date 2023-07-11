import { Tooltip } from "react-tooltip";

const CardToolTip = (props) => {
  console.log(props.cardInfo.name);
  console.log(props.cardInfo);
  // TODO: some of the tooltips work, some do not, and I have no idea why
  return (
    <>
      <a className={`cardDesc ${props.cardInfo.id}`}>?</a>
      <Tooltip anchorSelect={`.${props.cardInfo.id}`} place="top">
        {props.cardInfo.description}
      </Tooltip>
    </>
  );
};

export default CardToolTip;
