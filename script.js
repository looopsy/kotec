const form = document.querySelector('form');
		const jokeDiv = document.querySelector('#joke');

		form.addEventListener('submit', async (event) => {
			event.preventDefault();
			const response = await fetch(`https://api.chucknorris.io/jokes/random`);
			const data = await response.json();
			jokeDiv.innerHTML = `<p>${data.value}</p>`;
		});