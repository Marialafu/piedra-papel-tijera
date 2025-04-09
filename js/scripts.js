const circlesElement = document.getElementById('circles')


const circlesExample = (event) => {
    console.log(event.target.dataset.icon);
    
}
circlesElement.addEventListener('click', circlesExample)

//el data se lo pongo a la imagen o al div. Si lo pongo al div al dar a la imagen no carga. Como se pued poner a ambos.