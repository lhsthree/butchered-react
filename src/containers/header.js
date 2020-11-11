import React from 'react';
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
    } from '../pages'

export default function Header() {
	return (

		<header>
            <img className="banner" src="images/butchered_words.jpg" /><p><em> "If John Blutarsky were a band..."</em></p>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/about">About</Link>
                        </li>
                        <li>
                            <Link to ="/members">Members</Link>
                        </li>
                        <li>
                            <Link to ="/releases">Releases</Link>
                        </li>
                        <li>
                            <Link to ="/upcoming-shows">Upcoming Shows</Link>
                        </li>
                        <li>
                            <Link to ="/press">Press</Link>
                        </li>
                        <li>
                            <Link to ="/contact">Contact</Link>
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
