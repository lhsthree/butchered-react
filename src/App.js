import React from 'react'
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
    <Router />
    <Footer />
    </>
    
  );
}

