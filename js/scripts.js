//si la tipografía la pongo al body no me lo cogen los botones, ¿se pone entonces la tipografía en el button también?
//los contadores se pueden hacer en un H3 o es necesario que sea en un input? así estaría bien?
//Hay alguna manera de que al borrar todos los datos de un input aparezca de nuevo el placeholder original sin tener que volver a ponerlo?
//como se organizaría el css para que esté más optimizado. El botón de rules tiene todo pero podría coger cosas de otro.

//Igual que en el var se pondría hand-circle en vez de blue-circle. ¿Es mejor si la clase le ponemos el nombre de hand?

//Primero coloqué el blue, luego el red, y cuando coloqué el amarillo se me movió el rojo y tuve que recolocarlo, ¿por qué?
//¿Si esto se ve en otra pantalla puede que se descoloque todo?

//Para el background tuve que poner altura y anchura y lo puse con vh y wh. Pero si no ponía uno de los dos me hacía scroll hasta que tuviera contenido, no? Se quedó raro y ahora si lo quito funciona.

//¿Por qué no me funciona el font family en los buttons. Al principio si pero se ha quitado solo.

//¿Como coloco los 3 circulos originales, tendría que crear una clase para el simple y otra para el advanced?


const startSimpleGameElement = document.getElementById('start-simple-game');
const playAgainButtonElement = document.getElementById('play-again-button');

const youPickedElement = document.getElementById('you-picked');
const gameResultMessageElement = document.getElementById('game-result-message')
const scoreResultElement = document.getElementById('score-number')

const houseOptions = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

let userPickedOption;
let housePickedOption;
let scoreResult = 0

const winOptions = {
  scissors: {
    paper: true,
    rock: false,
    lizard: true,
    spock: false,
  },
  paper:{
    scissors: false,
    rock:true,
    spock: true,
    lizard: false,
  },
  rock:{
    lizard: true,
    spock: false,
    scissors: true,
    paper: false,
  },
  lizard:{
    spock: true,
    scissors: false,
    paper: true,
    rock: false,
  },
  spock: {
    lizard: false,
    scissors: true,
    rock: true,
    paper: false,
  }
}

const comparePickedOptions = (event) => {

  if (userPickedOption === housePickedOption) {
    gameResultMessageElement.textContent = 'NO SCORE'
  } else if (winOptions[userPickedOption][housePickedOption] === true) {
    gameResultMessageElement.textContent = 'YOU WIN'
    scoreResult++
  } else {
    gameResultMessageElement.textContent = 'YOU LOSE'
  }
  scoreResultElement.textContent = scoreResult
  playAgainButtonElement.parentElement.classList.remove('hide')
};

const saveHousePickedOption = () => {
  const randomIndex = Math.floor(Math.random() * houseOptions.length);
  housePickedOption = houseOptions[randomIndex];
  comparePickedOptions();
};
//guardar mi jugada - en you picked
const saveUserPickedOption = event => {
  userPickedOption = event.target.dataset.icon;
  startSimpleGameElement.classList.add('hide')

  saveHousePickedOption();
};

const reestartGame = () => {
  playAgainButtonElement.parentElement.classList.add('hide')
  startSimpleGameElement.classList.remove('hide')
}

startSimpleGameElement.addEventListener('click', saveUserPickedOption);
playAgainButtonElement.addEventListener('click', reestartGame);
