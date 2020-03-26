const container = document.querySelector('.container');
const square = document.getElementsByClassName('square');
const header = document.querySelector('#header');


function changeBackground(e){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    let div2 = e.target; //this will target the current element - which is div2
    return div2.style.backgroundColor = randomColor;
}

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
        
    }
    
}






