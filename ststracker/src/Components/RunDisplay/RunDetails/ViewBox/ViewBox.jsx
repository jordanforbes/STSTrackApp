import React from "react";
import "./ViewBox.scss";

const ViewBox = (props) => {
  const enemyRank = (enemy) => {
    const elites = [
      "Gremlin Nob",
      "Lagavulin",
      "3 Sentries",
      "Gremlin Leader",
      "Slavers",
      "Book of Stabbing",
      "Giant Head",
      "Nemesis",
      "Reptomancer",
      "Shield and Spear",
    ];

    const bosses = [
      "Slime Boss",
      "Hexaghost",
      "The Guardian",
      "Bronze Automaton",
      "The Champ",
      "The Collector",
      "The Awakened One",
      "Donu and Deca",
      "Time Eater",
      "The Heart",
    ];

    return elites.includes(enemy)
      ? "eliteRank"
      : bosses.includes(enemy)
      ? "bossRank"
      : "basicRank";
  };

  return (
    <div className={`viewContainer container`}>
      {props.damageTaken.map((damage) => (
        <div className="viewBox enemyCard row">
          <div className="row ">
            <div className="col-md-4 line1">Floor {damage.floor}</div>
            <div className="col-md-8 line1">
              <span className={`${enemyRank(damage.enemies)}`}>
                {damage.enemies}
              </span>
            </div>
          </div>
          <div className="row line2">
            <div className="col-md-4 ">{damage.turns} Turns</div>
            <div className="col-md-8 ">
              Took <span className="damage">{damage.damage} </span>Damage
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewBox;
