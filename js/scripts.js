//en simple falta que se asignen bien los colores.
//falta todo el responsive.

const startGameElement = document.getElementById('start-game');
const duringGameElement = document.getElementById('during-game');
const playAgainButtonElement = document.getElementById('play-again-button');

const youPickedElement = document.getElementById('you-picked');
const userPickedElement = document.getElementById('game-picked');

const imageYouPickedElement = document.getElementById('image-you-picked');
const imageGamePickedElement = document.getElementById('image-game-picked');

const gameResultMessageElement = document.getElementById('game-result-message');
const scoreYouResultElement = document.getElementById('score-you');
const scorePCResultElement = document.getElementById('score-pc');

const houseOptions = ['scissors', 'paper', 'rock'];

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
  duringGameElement.classList.remove('hide');
};

const saveHousePickedOption = () => {
  //se pondría así? multiplicado por 3 para que solo coja los 3 primeros valores
  const randomIndex = Math.floor(Math.random() * 3);
  housePickedOption = houseOptions[randomIndex];

  imageGamePickedElement.src = imagesOptions[housePickedOption];
  userPickedElement.classList.add(housePickedOption);
  comparePickedOptions();
};

const saveUserPickedOption = event => {
  userPickedOption = event.target.dataset.icon;
  if (!userPickedOption) return;

  startGameElement.classList.add('hide');
  imageYouPickedElement.src = imagesOptions[event.target.dataset.icon];
  youPickedElement.classList.add(event.target.dataset.icon);
  saveHousePickedOption();
};

const reestartGame = event => {
  duringGameElement.classList.add('hide');
  startGameElement.classList.remove('hide');
};

console.log((href = 'advance.html'));

const startGame = () => {
  if ((href = 'advance.html')) {
    houseOptions.push('lizard', 'spock');
  }
};
startGame();

startGameElement.addEventListener('click', saveUserPickedOption);
playAgainButtonElement.addEventListener('click', reestartGame);
