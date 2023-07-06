import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import RunDisplay from "./Components/RunDisplay/RunDisplay";
function App() {
  const [runData, setRunData] = useState([]);

  useEffect(() => {
    // var runs = getRunData();
    getRunData();
  }, []);

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
        <div className="row">
          <h1>Spire Track Star</h1>
        </div>
        <br />
        <div className="row">
          <RunDisplay runData={runData} />
        </div>
      </div>
    </div>
  );
}

export default App;
