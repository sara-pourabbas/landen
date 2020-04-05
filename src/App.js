import React from 'react';
import './assets/StyleLoader';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './pages/Start/Start';


export default class App extends React.Component {

  render(){
    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" name="start" component={Start} />
            </Switch>
        </BrowserRouter>
    )
  }
}

