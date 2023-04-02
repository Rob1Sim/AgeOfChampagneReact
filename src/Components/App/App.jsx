import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "wouter";
import Navbar from "../Navbar/Navbar";
import Provider from "../../contexts/user/Provider";
import CardList from "../CardList/CardList";
import Card from "../Cartes/Card";
import BurgerMenuProvider from "../../contexts/burgerMenu/burgerMenu";
import AnimationList from "../AnimationList/AnimationList";
import Error from "../Error/Error";
import VigneronList from "../VigneronList/VigneronList.jsx";

function App() {
  return (
    <Provider>
      <BurgerMenuProvider>
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
              <AnimationList />
            </Route>
            <Route path="/partenaires">
              <h1>Les partenaires</h1>
            </Route>
            <Route path="/vignerons">
              <h1>Vignerons</h1>
              <VigneronList />
            </Route>
            <Route path="/profile">
              <h1>Votre profile</h1>
            </Route>
            <Route component={Error} />
          </Switch>
        </div>
      </BurgerMenuProvider>
    </Provider>
  );
}

export default App;

