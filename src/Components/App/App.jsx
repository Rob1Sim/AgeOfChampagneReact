import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Provider from "../../contexts/user/Provider";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
      </div>
    </Provider>
  );
}

export default App;
