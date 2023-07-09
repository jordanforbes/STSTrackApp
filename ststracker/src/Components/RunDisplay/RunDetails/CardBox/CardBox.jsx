const CardBox = (props) => {
  const cardName = props.cardName;
  const upgrade = "";
  const type = "";
  const color = "";
  const count = props.count;
  console.log("CARDBOXTEST");
  console.log(cardName, count);
  return (
    <div className="deckCard ">
      {count}x {cardName}
    </div>
  );
};

export default CardBox;
