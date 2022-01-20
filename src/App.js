import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';

import Chats from "./Chats";
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>          
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/chats" component={Chats} />
          </Switch>        
        </AuthProvider>      
      </Router>
    </div>
  );
}

export default App;
