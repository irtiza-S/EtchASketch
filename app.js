const container = document.querySelector('.container');


//16 * 16 grid
for(let i = 0; i < 16; i++){
    const div =  document.createElement('div');
    div.style.cssText = 'border: 1px solid black; flex: 1';
    container.appendChild(div);
    for (let j = 0; j < 16; j++){
        const div2 = document.createElement('div');
        div2.classList.add('square');
        div.style.display = 'flex';
        div.appendChild(div2);    
    }
}