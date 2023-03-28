import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "wouter";
import Navbar from "../Navbar/Navbar";
import Provider from "../../contexts/user/Provider";
import CardList from "../CardList/CardList";
import Card from "../Cartes/Card";
import BurgerButtonProvider from "../../contexts/burgerButton/burgerButton";

function App() {
  return (
    <Provider>
      <BurgerButtonProvider>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/">
              <Redirect to="/cartes" />
            </Route>
            <Route path="/cartes">
              <CardList />
            </Route>
            <Route path="/cartes/:cardId">
              <Card />
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
      </BurgerButtonProvider>
    </Provider>
  );
}

export default App;
