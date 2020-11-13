import React from 'react'

export default function Releases() {
    return (
        <section className ="releases">
        <figure>
            <a href="https://butchered.bandcamp.com/track/born-to-run-with-scissors-single">
                <img 
                    className="releases" 
                    src="images/born.jpg" 
                    alt="Born-Run-With-Scissors"
                />
            </a>
        </figure>
        <figure>
            <a href="https://butchered.bandcamp.com/track/shred-forever">
                <img 
                    className="releases" 
                    src="images/shred-forever.jpg" 
                    alt="Shred-Forever"
                />
            </a>
        </figure>
        <figure>
            <a href="https://butchered.bandcamp.com/album/whatever-i-guess">
                <img 
                    className="releases" 
                    src="images/whatever.jpg" 
                    alt="Whatever, I Guess..."
                />
            </a>
        </figure>
        <figure className="album_art">
            <a href="https://butchered.bandcamp.com/album/butchered">
                <img 
                    className ="releases" 
                    src="images/untitled.jpg" 
                    alt="Untitled" 
                />
            </a>
        </figure>    
        <figure>
            <a href="https://butchered.bandcamp.com/album/return-to-lightningdome">
                <img 
                    className="releases" 
                    src="images/mad_max.jpg" 
                    alt="Return to Lightning Dome"
                />
            </a>
        </figure>    
    </section>
    )
}