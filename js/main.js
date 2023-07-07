let gridSize = 16
appendGrids(gridSize);
const squares = document.querySelectorAll('.mainContainer > .square');
const container = document.querySelector('.mainContainer');

container.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('square')){
        e.target.classList.add('active'); 
    }
})


document.querySelector('.sizeBtn').addEventListener('click', function (e){
    changeSize();
    removeAllChildNodes(container);
    appendGrids(gridSize);
})


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function appendGrids(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++){
        createGrid(256/gridSize);
        }
    }
}


function createGrid(gridSize) {
    const div = document.createElement('div')
    div.classList.add('square')
    div.style.width = `${gridSize}px`
    div.style.height = `${gridSize}px`
    document.querySelector('.mainContainer').appendChild(div)
}


squares.forEach(square => square.addEventListener('mouseover', function (e) {
    e.target.classList.add('active');
}))




function changeSize() {
    let newSize = Number(prompt("Type a number(1-100)", "16"))
    if (newSize >= 1 && newSize <= 100) {
       gridSize = newSize
    return gridSize 
    } else {
        return 0
    }
    
}
   