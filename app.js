const container = document.querySelector('.container');
const square = document.getElementsByClassName('square');
const header = document.querySelector('header');

let reset = document.createElement('button');
header.appendChild(reset);
reset.textContent = 'R';
reset.style.cssText = 'font-family: Pacifico, Arial, cursive';
reset.classList.add('reset');
// reset.style.cssText = 'width: 10px;'


function changeBackground(e){
    //changes background color of grid cells.
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let div2 = e.target; //this will target the current element - which is div2
    return div2.style.backgroundColor = randomColor;
}

function defaultGrid(){
    //makes a 16 x 16 grid - default grid
    for(let i = 0; i < 16; i++){
        const div =  document.createElement('div');
        div.style.cssText = 'border: 1px solid black; flex: 1';
        container.appendChild(div);
        // div.addEventListener('mouseover', changeBackground);
        for (let j = 0; j < 16; j++){
            const div2 = document.createElement('div');
            div2.classList.add('square');
            div.style.display = 'flex';
            div.appendChild(div2);  
        
            div2.addEventListener('mouseover', changeBackground);
            reset.addEventListener('click', (e) => {
                reset = e.target;
                div2.style.backgroundColor = 'white'
                div2.style.cssText = 'box-shadow: inset 0px 0px 5px 5px rgba(0,0,0,0.05)';
            });
        }
    }
}

defaultGrid();



