import React from "react";
import { Switch,Route, Redirect, BrowserRouter } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header";
import Banks from "./Container/Banks/Banks";
import BankDetail from "./Container/Banks/BankDetail";

function App() {

  return (
    <div>
      <Header/>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/all-banks"/>
            )}/>
            <Route path="/bank-details/:ifsc" exact component={BankDetail} />
            <Route path="/all-banks" component={Banks} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
