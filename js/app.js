const mainSquare = document.createElement('div');
invader.appendChild(mainSquare);
mainSquare.classList.add('mainSquareStyle');

function createGrid(sizeGrid, sizePixel) {
    // on dit qu'on début de notre fonction, la page html doit renvoyer du 
    // vide ( "" ) au niveau de mainSquare. En gros, ça vide la grille
    mainSquare.innerHTML = "";
        // on crée une div 'row' qui représente une ligne de longueur 'size' carrés
        for(let i = 0; i <= sizeGrid - 1; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        // on crée 'size' div de carrés invdividuels sur notre ligne 'row'
        for(let j = 0; j <= sizeGrid - 1; j++) {
            const pixel = document.createElement('div');
            row.appendChild(pixel);
            pixel.classList.add('square');
        // changer le style des cases (class CSS square)
            pixel.style.width = sizePixel + 'px';
            pixel.style.height = sizePixel + 'px';
        }
        // on rattache 'row' à notre conteneur, la div 'mainSquare"
        mainSquare.appendChild(row)
    }  
}

function createInput(type, name, value, placeholder, classe, min, max) {
const menu = document.querySelector('.configuration');
const pixelConfig = document.createElement('input');
pixelConfig.setAttribute("type", type);
pixelConfig.setAttribute("name", name);
pixelConfig.setAttribute("value", value)
pixelConfig.setAttribute ("placeholder", placeholder);
pixelConfig.setAttribute ("min", min);
pixelConfig.setAttribute ("max", max);
pixelConfig.className = classe;
menu.appendChild(pixelConfig);
}

createInput('number', 'Taille de la grille', 'Taille de la grille', 'Taille de la grille (Max : 25)', 'gridSize', 1, 25);
createInput('number', 'Taille des pixels', 'Taille des pixels', 'Taille de la case (en pixels)', 'pixelSize', 10, 20 );
createInput('submit', 'Valider', 'Valider', null, 'validate');


document.getElementsByTagName('form')[0].addEventListener('submit', function(evt) {
    evt.preventDefault();
    
    const userValue = document.querySelector('.gridSize').value;
    const userPixel = document.querySelector('.pixelSize').value;

    createGrid(userValue, userPixel);

    const allPixels = document.querySelectorAll('.square');

    allPixels.forEach(pixel => {
        pixel.addEventListener('click', () => {
        pixel.classList.toggle('squareBlack')
        })
} )
});

