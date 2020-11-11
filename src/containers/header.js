import React from 'react';

export default function Header() {
	return (

		<header>
            <img class="banner" src="images/butchered_words.jpg" /><p><em> "If John Blutarsky were a band..."</em></p>
        <nav>
            <ul>
                <li class="current_page">Home</li>
                <li><a href="about.html">About</a></li>
                <li><a href="members.html">Members</a></li>
                 <li><a href="releases.html">Releases</a></li>
                <li><a href="upcoming_shows.html">Upcoming Shows</a></li>
                 <li><a href="press.html">Press</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
        </header>
	         
	)
}
