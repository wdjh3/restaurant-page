const content = document.querySelector("#content");

export const loadPage = () => {
  content.innerHTML = `
			<h1>The best sushi to satisfy your palates!</h1>
			<p>"Sushi Paradise" is the ultimate place for all your cravings for Japanese delicacies!</p>
			<p>From the simple yet satisfying maki, to the plethora of variations of nigiri, paired with a side of Miso soup, anything you desire is only an order away!</p>`;
};
