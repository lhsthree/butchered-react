import React, {useState, useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { 
    Home, 
    About, 
    Members, 
    Releases, 
    UpcomingShows,
    Press,
    Contact
    } from '../pages'



export default function Header() {
    const [expanded, setExpanded] = useState(false);

    
	return (

		<header>
            <img className="banner" src="images/butchered_words.png" />
            <p className="quote">"If John Blutarsky were a band..."</p>
                
        </header>
	         
	)
}
