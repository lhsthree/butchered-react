import React from 'react'

export default function Home() {
    return (
        <section className="music">
        <div className="music">Shred Forever
		    <audio src="audio/shred_forever.mp3" controls>
		    <embed
		        src="audio/shred_forever.mp3"
		        width="300"
		        height="90"
		        loop={false}
		        autostart="false" />
		    </audio>
    	</div>

		<img src="images/main_image.jpg" />
		</section>
    )
}