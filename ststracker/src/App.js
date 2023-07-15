//////////////////////////////////////////////
// main entry point for app
/////////////////////// //////////////////////////////////

import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

import RunDisplay from "./Components/RunDisplay/RunDisplay";
function App() {
  const [runData, setRunData] = useState([]);
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    getRunData();
    getGameData();
    // console.log("!!!!!!relicData!!!!!");
    // console.log(relicData);
  }, []);

  // gets library of all info in game
  const getGameData = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/OceanUwU/slaytabase/main/docs/slay%20the%20spire/data.json"
      );
      setGameData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // gets library of runs from backend
  const getRunData = () => {
    axios
      .get("http://localhost:3000/api/v1/sts_runs")
      .then((res) => {
        setRunData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log("example run data");
  console.log(runData[0]);

  return (
    <div className="App">
      <div className="container">
        <div className="row titleFont titleSpace">
          <h1>Spire Track Star</h1>
        </div>
        <br />
        <div className="row">
          <RunDisplay
            runData={runData}
            cardData={gameData.cards}
            relicData={gameData.relics}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
