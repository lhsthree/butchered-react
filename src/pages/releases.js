import React from 'react'

export default function Releases() {
    return (
        <section class ="releases">
        <figure class="album_art">
            <a href="https://butchered.bandcamp.com/album/butchered">
	            <img 
	            	class ="releases" 
	            	src="images/untitled.jpg" 
	            	alt="Untitled" 
	            />
            </a>
        </figure>

        <figure>
            <a href="https://butchered.bandcamp.com/album/return-to-lightningdome">
            	<img 
            		class="releases" 
            		src="images/mad_max.jpg" 
            		alt="Return to Lightning Dome"
            	/>
            </a>
        </figure>

        <figure>
            <a href="https://butchered.bandcamp.com/album/whatever-i-guess">
            	<img 
            		class="releases" 
            		src="images/whatever.jpg" 
            		alt="Whatever, I Guess..."
            	/>
            </a>
        </figure>
        <figure>
            <a href="https://butchered.bandcamp.com/track/shred-forever">
	            <img 
	            	class="releases" 
	            	src="images/shred-forever.jpg" 
	            	alt="Shred-Forever"
	            />
            </a>
        </figure>
    </section>
    )
}