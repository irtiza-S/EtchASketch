const container = document.querySelector('.container');
const square = document.getElementsByClassName('square');
const header = document.querySelector('header');
const containerWrapper = document.querySelector('.containerBorder');

let reset = document.createElement('button');
header.appendChild(reset);
reset.textContent = 'R';
reset.classList.add('reset');
reset.classList.add('button');

let setGrid = document.createElement('button');
header.appendChild(setGrid);
setGrid.textContent = 'S.G'
setGrid.classList.add('setGrid');
setGrid.classList.add('button');

let deleteBtn = document.createElement('button');
header.appendChild(deleteBtn);
deleteBtn.textContent = 'D';
deleteBtn.classList.add('deleteBtn');
deleteBtn.classList.add('button');

let eraser = document.createElement('button');
header.appendChild(eraser);
eraser.textContent = 'E';
eraser.classList.add('button');
eraser.classList.add('eraser');


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
        div.style.cssText = 'flex: 1';
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
                div2.style.backgroundColor = ''
                div2.style.cssText = 'box-shadow: inset 0px 0px 5px 5px rgba(0,0,0,0.05)';
                
                
            });

            
            
            
            deleteBtn.addEventListener('click', () =>{
                container.innerHTML = ''
            })
            
            eraser.addEventListener('click', (e) => {
                div2.addEventListener('mouseover', (e) =>{
                    div2.style.backgroundColor = '';
                });
            });
            
            eraser.addEventListener('dblclick', (e) =>{
                div2.addEventListener('mouseover', (e)=>{
                    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                    let div2 = e.target; //this will target the current element - which is div2
                    div2.style.backgroundColor = randomColor;
                });
            });    
            
               
        }
    }                                  
                
                   
}



setGrid.addEventListener('click', (e) => {
    newGrid = prompt('To create a new grid enter a number between 0 and 64');
    newGrid = parseInt(newGrid);
    
    for(let i = 0; i < newGrid; i++){
        const box = document.createElement('div');
        box.style.cssText = 'flex: 1';
        container.append(box);

        for(let j = 0; j < newGrid; j++){
            const box2 = document.createElement('div');
            box2.classList.add('square');
            box.style.display = 'flex';
            box.appendChild(box2);

            box2.addEventListener('mouseover', changeBackground);
            reset.addEventListener('click', (e) =>{
                reset = e.target;
                box2.style.backgroundColor = '';
                box2.style.cssText = 'box-shadow: inset 0px 0px 5px 5px rgba(0,0,0,0.05)';
                
            });

            
            

            deleteBtn.addEventListener('click', () => {container.innerHTML = ''});
            
            eraser.addEventListener('click', (e) =>{
                box2.addEventListener('mouseover', (e) =>{
                    box2.style.backgroundColor = '';
                });
            });
            
            eraser.addEventListener('dblclick', (e) =>{
                box2.addEventListener('mouseover', (e)=>{
                    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
                    let box2 = e.target; //this will target the current element - which is div2
                    box2.style.backgroundColor = randomColor;
                });
            });  
        }
    }


});

defaultGrid();
