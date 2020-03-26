const container = document.querySelector('.container');
const square = document.getElementsByClassName('square');
let colors = ['1', '2', '3', '4', '5'];
let div2;


function changeBackground(){
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    if(randomColor === '1'){
        div2.style.backgroundColor = 'red';
        console.log('red');
    } else if(randomColor === '2'){
        div2.style.backgroundColor = 'blue';
        console.log('blue');
    } else if(randomColor === '3'){
        div2.style.backgroundColor = 'yellow';
        console.log('yellow');
    } else if(randomColor === '4'){
        div2.style.backgroundColor = 'orange';
        console.log('orange');
    } else{
        div2.style.backgroundColor = 'green';
        console.log('green');
    }
}

//makes a 16 x 16 grid - default grid
for(let i = 0; i < 16; i++){
    const div =  document.createElement('div');
    div.style.cssText = 'border: 1px solid black; flex: 1';
    container.appendChild(div);
    // div.addEventListener('mouseover', changeBackground);
    for (let j = 0; j < 16; j++){
        div2 = document.createElement('div');
        div2.classList.add('square');
        div.style.display = 'flex';
        div.appendChild(div2);  
        
        div2.addEventListener('mouseover', changeBackground);
    }
}






