import './App.css';
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Login from "./Login";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          
          <Switch>
            
            <Route path="/" component={Login} />
          
          </Switch>
        
        </AuthProvider>      
      </Router>
    </div>
  );
}

export default App;
