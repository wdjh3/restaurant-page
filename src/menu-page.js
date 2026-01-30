const content = document.querySelector("#content");

export const loadMenuPage = () => {
  content.innerHTML = `
		<ul id="menu-list">
			<li class="food-item">
				<img src="">
				<h2>Maki</h2>
				<p class="food-description">Maki, or Makizushi, is the quintessential Japanese rolled sushi. It’s a harmonious bite-sized roll where seasoned vinegar rice and various fillings are wrapped tightly in a sheet of toasted seaweed (nori).</p>
			</li>
			<li class="food-item">
				<img src="">
				<h2>Nigiri</h2>
				<p class="food-description">Nigiri is a hand-pressed mound of seasoned vinegared rice topped with a single, pristine slice of raw fish or seafood.</p>
			</li>
			<li class="food-item">
				<img src="">
				<h2>Miso soup</h2>
				<p class="food-description">Miso soup is a traditional Japanese dashi-based soup characterized by its savory umami profile and cloudy, fermented finish.</p>
			</li>
		</ul>
	`;
};
