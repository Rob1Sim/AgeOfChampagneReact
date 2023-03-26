import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "wouter";
import Navbar from "../Navbar/Navbar";
import Provider from "../../contexts/user/Provider";
import { CardList } from "../CardList/CardList";

function App() {
  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/">
            <Redirect to="/cartes" />
          </Route>
          <Route path="/cartes">
            <CardList/>
          </Route>
          <Route path="/animations">
            <h1>Les animations</h1>
          </Route>
          <Route path="/partenaires">
            <h1>Les partenaires</h1>
          </Route>
          <Route path="/profile">
            <h1>Votre profile</h1>
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
