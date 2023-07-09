import logo from "./logo.svg";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

import RunDisplay from "./Components/RunDisplay/RunDisplay";
function App() {
  const [runData, setRunData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // var runs = getRunData();
    getRunData();
    getCardData();
    // console.log("!!!!!!carddata!!!!!");
    // console.log(cardData);
  }, []);

  const getCardData = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/OceanUwU/slaytabase/main/docs/slay%20the%20spire/data.json"
      );
      setCardData(response.data.cards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getRunData = () => {
    axios
      .get("http://localhost:3000/api/v1/sts_runs")
      .then((res) => {
        // Bind data to runData hook
        setRunData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row titleFont titleSpace">
          <h1>Spire Track Star</h1>
        </div>
        <br />
        <div className="row">
          <RunDisplay runData={runData} cardData={cardData} />
        </div>
      </div>
    </div>
  );
}

export default App;
