import React from 'react';
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
	return (

		<header>
            <img className="banner" src="images/butchered_words.jpg" /><p><em> "If John Blutarsky were a band..."</em></p>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to ="/"
                                activeClassName="current_page"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to ="/about"
                                activeClassName="current_page"
                            >About</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/members"
                                activeClassName="current_page"
                            >Members</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/releases"
                                activeClassName="current_page"
                            >Releases</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/upcoming-shows"
                                activeClassName="current_page"
                            >Upcoming Shows</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/press"
                                activeClassName="current_page"
                            >Press</NavLink>
                        </li>
                        <li>
                            <NavLink to ="/contact"
                                activeClassName="current_page"
                            >Contact</NavLink>
                        </li>
                    </ul>
                </nav>
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
