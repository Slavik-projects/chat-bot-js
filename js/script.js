const chatWindow = document.querySelector('.chat_window');
const btnStart = document.querySelector('.clear_btn');

let data = {
	choices: ['Films','Musics'],
	options: [{
   name: 'collection for film',
   items: [{
		name: 'History 1',
		link: 'https://www.youtube.com/watch?v=AxXvJCdxkqw'
	},{
		name: 'History 2',
		link: 'https://www.youtube.com/results?search_query=historia+%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0'
	}]
	},{
   name: 'collection for musics',
	items: [{
		name: 'Music 1',
		link: 'https://www.youtube.com/watch?v=4exhUXHFDjk&t=3503s'
	},{
		name: 'Music 2',
		link: 'https://www.youtube.com/watch?v=U0CGsw6h60k'
	},{
		name: 'Music 3',
		link: 'https://www.youtube.com/watch?v=fEOyePhElr4'
	}]
	}],
}

const div = document.createElement('div');
div.style.display = 'flex';
div.style.flexWrap = 'wrap';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.gap = '15px';
div.style.padding = '10px';
div.style.marginTop = '80px';
div.style.fontSize = '24px';
div.style.fontWeight = '400';


function displayOptions(){
   let arrOfOpt = data.choices;
	
	arrOfOpt.forEach((item)=>{

		const divChild = document.createElement('div');
		divChild.style.border = '2px solid grey';
		divChild.style.padding = '6px';
		divChild.innerHTML = item;
		divChild.addEventListener('click', showOpts);
		div.appendChild(divChild);
		chatWindow.appendChild(div);

		
	})

   

	btnStart.setAttribute('disabled', '')

}


function showOpts(e) {
   div.style.display = 'none';
	const newDiv = document.createElement('div');
	newDiv.style.display = 'flex';
	newDiv.style.flexDirection = 'column';

	if(e.target.innerText === 'Films'){
		console.log('you clicked on films');
		data.options[0].items.forEach((film) => {
			const div = document.createElement('div');
			const a = document.createElement('a');
			a.style.color = 'green';
			a.style.fontSize = '20px';
			a.style.textDecoration = 'none';
			a.innerText = `${film.name}`
			a.setAttribute("href", film.link);
			div.appendChild(a)
			newDiv.appendChild(div);
			chatWindow.appendChild(newDiv);
		})
		
	}

	if(e.target.innerText === 'Musics'){
		console.log('you clicked on musics');
		data.options[1].items.forEach((music) => {
			const div = document.createElement('div');
			const a = document.createElement('a');
			a.style.color = 'green';
			a.style.fontSize = '20px';
			a.style.textDecoration = 'none';
			a.innerText = `${music.name}`
			a.setAttribute("href", music.link);
			div.appendChild(a)
			newDiv.appendChild(div);
			chatWindow.appendChild(newDiv);
		})
	}

}

btnStart.addEventListener('click', displayOptions)