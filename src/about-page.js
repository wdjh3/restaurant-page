const content = document.querySelector("#content");

export const loadAboutPage = () => {
  content.innerHTML = `
		<h1>Sushi Paradise</h1>
    <h2>Where Tradition Meets the Tide</h2>
		<p>At <strong>Sushi Paradise</strong>, we believe that great sushi is an art form that should be accessible to everyone. Founded in 2024, our mission has been simple: to source the finest ingredients from the world's oceans and serve them with a blend of Japanese tradition and modern creativity.</p>

			<h3>Our Philosophy</h3>
			<p>We don't just roll sushi; we craft experiences. From the precise seasoning of our premium koshihikari rice to the delicate slicing of our grade-A bluefin tuna, every detail is handled with <em>Omotenashi</em>—the Japanese art of selfless hospitality.</p>

    <h3>What Sets Us Apart</h3>
    <ul class="list-of-unique">
        <li><strong>The Freshness Guarantee:</strong> We partner with local fisheries and international suppliers to ensure our seafood arrives daily, never frozen.</li>
        <li><strong>The Master’s Touch:</strong> Our chefs bring decades of experience, specializing in both classic Nigiri and adventurous signature rolls.</li>
        <li><strong>A Sanctuary for Foodies:</strong> Whether you’re here for a quick lunch or a celebratory Omakase dinner, our space is your "paradise" away from the hustle.</li>
    </ul>

    <h3>Visit Us</h3>
    <table>
        <thead>
            <tr>
                <th>Days</th>
                <th>Hours</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Mon - Thu</td><td>11:30 AM – 9:00 PM</td></tr>
            <tr><td>Fri - Sat</td><td>11:30 AM – 10:30 PM</td></tr>
            <tr><td>Sunday</td><td>12:00 PM – 8:00 PM</td></tr>
        </tbody>
    </table>

    <p class="footer-note">"Sushi is not just a meal; it’s a moment of Zen."</p>
	`;
};
