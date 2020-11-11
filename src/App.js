import React from 'react'
import { Header, Footer } from './containers'
import { 
	Home, 
	About, 
	Members, 
	Releases, 
	UpcomingShows,
	Press,
	Contact
	} from './pages'

function App() {
  return (
    <>
    <Header />
    <Home />
    <About />
    <Members />
    <Releases />
    <UpcomingShows />
    <Press />
    <Contact />
    <Footer />
    </>
    
  );
}

export default App;
