import React from 'react'

export default function Footer() {
	return(
		<footer>
       <a href="https://www.facebook.com/Butchered/"> 
       		<img className="facebook" src="images/facebook.png" alt="facebook" />
       </a>
        <a href="https://butchered.bandcamp.com/"> 
        	<img className="bandcamp" src="images/bandcamp.png" alt="bandcamp" />
        </a>
        <a href="https://www.instagram.com/butchereddudes/"> 
        	<img className="instagram" src="images/instagram.png" alt="instagram" />
        </a>
        <div className="copyright">&copy; Copyright Butchered 2019</div>
    	</footer>
	)
}	