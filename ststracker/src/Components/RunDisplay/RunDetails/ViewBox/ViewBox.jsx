import React from "react";
// import charFolder from "../../../../images/characters/";
import "./ViewBox.scss";

const ViewBox = (props) => {
  // console.log(`${props.character.toLowerCase()}Pic`);
  return (
    <div className={`${props.character.toLowerCase()}Pic`}>
      <img
        className={`viewPic ${props.character.toLowerCase()}Pic`}
        src={`${
          process.env.PUBLIC_URL
        }/images/characters/${props.character.toLowerCase()}-face.png`}
        alt={`${props.character}`}
      />
    </div>
  );
};

export default ViewBox;