import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Provider from "../../contexts/user/Provider";
import { CardList } from "../CardList/CardList";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <CardList />
      </div>
    </Provider>
  );
}

export default App;
