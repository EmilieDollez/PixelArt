const mainSquare = document.createElement('div');
invader.appendChild(mainSquare);
mainSquare.classList.add('mainSquareStyle');

function createGrid(size) {
    // on dit qu'on début de notre fonction, la page html doit renvoyer du 
    // vide ( "" ) au niveau de mainSquare. En gros, ça vide la grille
    mainSquare.innerHTML = "";
        // on crée une div 'row' qui représente une ligne de longueur 'size' carrés
        for(let i = 0; i <= size - 1; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        // on crée 'size' div de carrés invdividuels sur notre ligne 'row'
        for(let j = 0; j <= size - 1; j++) {
            const pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.classList.add('square');
        }
        // on rattache 'row' à notre conteneur, la div 'mainSquare"
        mainSquare.appendChild(row)
    }  
}

function createInput(type, name, value, classe) {
const menu = document.querySelector('.configuration');
const pixelConfig = document.createElement('input');
pixelConfig.setAttribute("type", type);
pixelConfig.setAttribute("name", name);
pixelConfig.setAttribute("value", value);
pixelConfig.className = classe;
menu.appendChild(pixelConfig);
}

createInput('number', 'Taille de la grille', 'Taille de la grille', 'gridSize');
createInput('number', 'Taille des pixels', 'Taille des pixels', 'pixelSize');
createInput('submit', 'Valider', 'Valider', 'validate');

// const inputGrid = document.querySelector("input");
// element.classList.add("une-classe")

document.getElementsByTagName('form')[0].addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    const userValue = document.querySelector('.gridSize').value;

    createGrid(userValue);

    const allPixels = document.querySelectorAll('.square');

    allPixels.forEach(pixel => {
        pixel.addEventListener('click', () => {
        pixel.classList.toggle('squareBlack')
        })
} )
});

