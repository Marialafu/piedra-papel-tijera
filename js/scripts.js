//si la tipografía la pongo al body no me lo cogen los botones, ¿se pone entonces la tipografía en el button también?

//contadores mejor e un span, no son titulos.

//como se organizaría el css para que esté más optimizado. El botón de rules tiene todo pero podría coger cosas de otro.

//Para el background tuve que poner altura y anchura y lo puse con vh y wh. Pero si no ponía uno de los dos me hacía scroll hasta que tuviera contenido, no? Se quedó raro y ahora si lo quito funciona.

//¿Por qué no me funciona el font family en los buttons. Al principio si pero se ha quitado solo.

const startSimpleGameElement = document.getElementById('start-simple-game');
const duringSimpleGameElement = document.getElementById('during-simple-game');
const playAgainButtonElement = document.getElementById('play-again-button');

const youPickedElement = document.getElementById('you-picked');
const userPickedElement = document.getElementById('game-picked');

const imageYouPickedElement = document.getElementById('image-you-picked');
const imageGamePickedElement = document.getElementById('image-game-picked');

const gameResultMessageElement = document.getElementById('game-result-message');
const scoreYouResultElement = document.getElementById('score-you');
const scorePCResultElement = document.getElementById('score-pc');

const houseOptions = ['scissors', 'paper', 'rock', 'lizard', 'spock'];

let userPickedOption;
let housePickedOption;

let scoreYouResult = 0;
let scorePcResult = 0;

const winOptions = {
  scissors: {
    paper: true,
    rock: false,
    lizard: true,
    spock: false
  },
  paper: {
    scissors: false,
    rock: true,
    spock: true,
    lizard: false
  },
  rock: {
    lizard: true,
    spock: false,
    scissors: true,
    paper: false
  },
  lizard: {
    spock: true,
    scissors: false,
    paper: true,
    rock: false
  },
  spock: {
    lizard: false,
    scissors: true,
    rock: true,
    paper: false
  }
};

const imagesOptions = {
  scissors: './assests/images/icon-scissors.svg',
  paper: './assests/images/icon-paper.svg',
  rock: './assests/images/icon-rock.svg',
  lizard: './assests/images/icon-lizard.svg',
  spock: './assests/images/icon-spock.svg'
};

const comparePickedOptions = event => {
  if (userPickedOption === housePickedOption) {
    gameResultMessageElement.textContent = 'NO SCORE';
  } else if (winOptions[userPickedOption][housePickedOption]) {
    gameResultMessageElement.textContent = 'YOU ARE AWESOME';
    scoreYouResult++;
  } else {
    gameResultMessageElement.textContent = 'YOU ARE FUCKED UP';
    scorePcResult++;
  }
  scoreYouResultElement.textContent = scoreYouResult;
  scorePCResultElement.textContent = scorePcResult;
  duringSimpleGameElement.classList.remove('hide');
};

const saveHousePickedOption = () => {
  const randomIndex = Math.floor(Math.random() * houseOptions.length);
  housePickedOption = houseOptions[randomIndex];
  imageGamePickedElement.src = imagesOptions[housePickedOption];

  comparePickedOptions();
};

const saveUserPickedOption = event => {
  userPickedOption = event.target.dataset.icon;
  startSimpleGameElement.classList.add('hide');
  imageYouPickedElement.src = imagesOptions[event.target.dataset.icon];
  saveHousePickedOption();
};

const reestartGame = () => {
  duringSimpleGameElement.classList.add('hide');
  startSimpleGameElement.classList.remove('hide');
};

startSimpleGameElement.addEventListener('click', saveUserPickedOption);
playAgainButtonElement.addEventListener('click', reestartGame);
