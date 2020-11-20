import React, {useState} from 'react';
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
            <img className="banner" src="images/butchered_words.jpg" />
            <p className="quote">"If John Blutarsky were a band..."</p>
            <Router>
                <Navbar expanded={expanded} bg="dark" variant="dark" expand="lg" sticky="top">
                        <Navbar.Brand href="https://music.apple.com/us/album/wax-pathetic/1538806823?fbclid=IwAR1qbTEHs3-OuhTb3qpTNBUK2BTp_U4rlYQdhkyxcE31Fsp_by8kVEwvYpc" target="#_blank">Wax Pathetic out NOW!!</Navbar.Brand>
                        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                exact to ="/"
                                activeClassName="current_page"
                            >Home</NavLink>
                           <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/about"
                                activeClassName="current_page"
                            >About</NavLink>
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/members"
                                activeClassName="current_page"
                            >Members</NavLink>
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/releases"
                                activeClassName="current_page"
                            >Releases</NavLink>
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/upcoming-shows"
                                activeClassName="current_page"
                            >Upcoming Shows</NavLink>
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/press"
                                activeClassName="current_page"
                            >Press</NavLink>
                            <NavLink 
                                onClick={() => setExpanded(false)}
                                to ="/contact"
                                activeClassName="current_page"
                            >Contact</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                
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
            </Router>
        </header>
	         
	)
}
