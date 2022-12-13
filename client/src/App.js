import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import StockList from "./components/StockList";
import StockDetail from "./components/StockDetails";
import StockValue from "./components/StockValue";

import "./App.css";

const base_URL = "http://localhost:4000";

function App() {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(base_URL);
      const result = await response.data;
      setScans(result);
      console.log(result);
    } catch (err) {
      console.log("err=>", err);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockList scans={scans} />} />
          <Route path="/:id" element={<StockDetail scans={scans} />} />
          <Route
            path="/:id/:criteria/:va"
            element={<StockValue scans={scans} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
