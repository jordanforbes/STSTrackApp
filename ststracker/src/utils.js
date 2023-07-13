// converts masterdeck and relic strings into actual arrays
export const arrayConverter = (arr) => {
  return arr
    .substr(1, arr.length - 2)
    .split(", ")
    .map((card) => card);
};

// searches for card information based on an entered card id

export const findCard = (card, data) => {
  let card_id = "";

  const cardData = {
    name: "",
    id: "",
    upgrade: 0,
    count: 0,
    cardInfo: {},
  };

  // checks if card is upgraded and how many times
  // the number of times is really only applicable for searing blow and modded cards
  if (card[card.length - 2] === "+") {
    cardData.upgrade = parseInt(card[card.length - 1]);
    // it's necessary to slice the upgrade off of the id in order to search through the card list
    card_id = card.slice(0, card.length - 2);
  } else {
    card_id = card;
  }

  let obj = data.find((cardObj) => cardObj.id === card_id);
  cardData.name = obj.name;
  cardData.id = obj.id;
  cardData.cardInfo = obj;

  return cardData;
};

// does the same but only returns the info with no notation of count or upgrade
export const findCardData = (card, data) => {
  let card_id = "";

  // checks if card is upgraded and removes it
  if (card[card.length - 2] === "+") {
    card_id = card.slice(0, card.length - 2);
  } else {
    card_id = card;
  }

  return data.find((cardObj) => cardObj.id === card_id);
};

export const findRelicData = (relic_id, data) => {
  return data.find((relicObj) => relicObj.id === relic_id);
};
