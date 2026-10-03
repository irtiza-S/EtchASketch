const container = document.getElementById('container')
const heading = document.getElementById('heading')
const header = document.querySelector('header');
// heading.style = 'display: none;'
let pickedcolor = '#000000'
let mode = 'random'
let usrchoice = 0
let regularGrid = true

const eraser = document.createElement('button')
eraser.textContent = 'E'
eraser.classList.add('button')
eraser.classList.add('eraser')
header.appendChild(eraser)
eraser.addEventListener('click', (e) => mode = 'eraser')

const colorpicker = document.createElement('input')
colorpicker.setAttribute('type', 'color')
header.appendChild(colorpicker)
colorpicker.classList.add('button')
colorpicker.classList.add('pickerBtn')
colorpicker.addEventListener('input', function(e) {
    pickedcolor = e.target.value
    mode = 'color'
})

const randomClrBtn = document.createElement('button')
randomClrBtn.textContent = 'R'
randomClrBtn.classList.add('button')
randomClrBtn.classList.add('random')
header.appendChild(randomClrBtn)
randomClrBtn.addEventListener('click', () => mode = 'random')

const setgridbtn = document.createElement('button')
setgridbtn.textContent = 'S.G'
setgridbtn.classList.add('button')
header.appendChild(setgridbtn)
setgridbtn.addEventListener('click', gridSize)

function defaultGrid(e) {
    let size = 16
    if (!regularGrid) {
        size = usrchoice
    }
    for (let i = 0; i < size; i++) {
        let div = document.createElement('div')
        div.setAttribute('style', 'display: flex; flex: 1')
        container.appendChild(div)
        div.classList.add('square')
        // div.addEventListener('mouseover', colorRandomizer())
        for (let j = 0; j < size; j++) {
            let div2 = document.createElement('div')
            div2.setAttribute('style', 'flex: 1;')
            div2.classList.add('square')
            div.appendChild(div2)
            div2.addEventListener('mouseover', paint)
        }
    }
}

function gridSize() {
    let usrInput = prompt('Pick a number between 2 and 100: ')
    if (usrInput === null) return

    const size = Number(usrInput)
       if (!Number.isInteger(size) || size < 2 || size > 100) {
        alert('Please enter a whole number between 2 and 100.')
        return
    }
    usrchoice = size
    regularGrid = false
    container.innerHTML = ''
    defaultGrid()
    return usrchoice
}

function paint(e) {
    if (mode === 'random') {
        const hex = Math.floor(Math.random() * 16777216).toString(16)
        e.currentTarget.style.background = `#${hex.padStart(6, '0')}`
    } else if (mode === 'eraser') {
        e.currentTarget.style.background = 'none'
    } else {
        e.currentTarget.style.background = pickedcolor
    }
}

defaultGrid()