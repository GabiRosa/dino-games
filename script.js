const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumpig = false;

let position = 0;


function handleKeyUp(event) {
	if (event.keyCode === 32) {
		if (!isJumpig){
			jump();
		} 
	}
}

function jump() {
 
	isJumpig = true;

	let upInterval = setInterval(() => {
		if (position >= 150) {



			clearInterval(upInterval);

		
	let downInterval =setInterval (() => {
		if (position <=0) {
			clearInterval(downInterval);
			isJumpig = false;
			
		

		} else {
			position -= 15;
			dino.style.bottom = position + 'px';
		}
	}, 20);
} else {
		//subindo
		position += 15;
		dino.style.bottom = position + 'px';
		
		}
	}, 20);
}

function createCactus(){
	const cactus = document.createElement('div');
	let cactusPosition = 1500;
	let randomTime = Math.random() * 5000;

	cactus.classList.add('cactus');
	
	cactus.style.left = 1500 + 'px';
	background.appendChild(cactus);

	let leftInterval = setInterval(() => {
		if (cactusPosition < - 60) {

			clearInterval(leftInterval);
			background.removeChild(cactus); //evita processamento desnecessario

		} else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
		
		clearInterval(leftInterval);
		
		document.body.innerHTML = '<h1 class = "game-over"> JOGO ENCERRADO </h1>'
	    } else {
			cactusPosition -= 15;
			cactus.style.left = cactusPosition + 'px';
		}

	}, 15);

	setTimeout(createCactus, randomTime); 

}
createCactus();
document.addEventListener ('keyup', handleKeyUp);