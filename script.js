const container = document.querySelector('.container');

fetch(url)
	.then((response) => response.json())
	.then((res) => {
		const bushido = Object.entries(res.data);
		for (let i = 0; i < bushido.length; i++) {
			const img = document.createElement('img');
			img.classList.add('cardImg');
			img.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[i][0]}_0.jpg`;

			img.id = i;
			img.addEventListener('click', (e) => {
				const dojoName = document.querySelector('#dojo-name');
				dojoName.innerText = champions[e.target.id][0];
				const dojoTitle = document.querySelector('#dojo-title');
				dojoTitle.innerText = champions[i][1].title;
				const dojoWeapon = document.querySelector('#dojo-weapon');
				dojoWeapon.innerText = champions[i][1].tags.join(`, `);
				const dojoDesc = document.querySelector('#dojo-desc');
				dojoDesc.innerText = champions[i][1].blurb;
				const dojoSplash = document.querySelector('#dojo-splash');
				dojoSplash.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champions[i][0]}_0.jpg`;
				const modal = document.querySelector('.modal-container');
				modal.style.visibility = 'visible';
			});
			const card = document.createElement('article');
			card.classList.add('card');
			card.appendChild(img);
			container.appendChild(card);
		}
		document.querySelector('.modal-container').addEventListener('click', () => {
			document.querySelector('.modal-container').style.visibility = 'hidden';
		});
	})
	.catch((err) => console.error(err));