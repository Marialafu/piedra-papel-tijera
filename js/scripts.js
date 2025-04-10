const circlesElement = document.getElementById('circles');

const youPickedElement = document.getElementById('you-picked');

const houseOptions = ['scissors', 'paper', 'rock'];

const circlesExample = event => {
  event.target.dataset.icon;
};
circlesElement.addEventListener('click', circlesExample);
//el data se lo pongo a la imagen o al div. Si lo pongo al div al dar a la imagen no carga. Como se pued poner a ambos.
let userPickedOption;
let housePickedOption;

//comprar jugdas
const comparePickedOptions = () => {
  if (userPickedOption === housePickedOption) {
    console.log('igual');
  } else if (0 === 0) {
    console.log(userPickedOption);
    console.log(housePickedOption);
  }
};

const saveHousePickedOption = () => {
  const randomIndex = Math.floor(Math.random() * houseOptions.length);
  housePickedOption = houseOptions[randomIndex];
  comparePickedOptions();
};
//guardar mi jugada - en you picked
const saveUserPickedOption = event => {
  userPickedOption = event.target.dataset.icon;
  saveHousePickedOption();
};

circlesElement.addEventListener('click', saveUserPickedOption);
