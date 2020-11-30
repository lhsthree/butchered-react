import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Header, Footer } from './containers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { 
	Home, 
	About, 
	Members, 
	Releases, 
	UpcomingShows,
	Press,
	Contact
	} from './pages'

export default function App() {
  return (
    <>
    <Header />
    <Switch>
        <Route exact path="/about">
            <About />
        </Route>
        <Route exact path="/members">
            <Members />
        </Route>
        <Route exact path="/releases">
            <Releases />
        </Route>
        <Route exact path="/upcoming-shows">
            <UpcomingShows />
        </Route>
        <Route exact path="/press">
            <Press />
        </Route>
        <Route exact path="/contact">
            <Contact />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    <Footer />
    </>
    
  );
}

