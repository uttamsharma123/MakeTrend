import React from 'react';
import Home from "./Home";
import HeaderComponent from "./HeaderComponent";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ToLikeMore from './ToLikeMore';

function MainComponent() {


  return <div className="container">

    <Router>
      <HeaderComponent/>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/to-like-more" component={ToLikeMore}/>
       
        <Redirect to="/"/>
       


      </Switch>
    </Router>
    
    

  </div>


}

export default MainComponent;
