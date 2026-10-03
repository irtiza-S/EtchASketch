# Etch-A-Sketch

A browser version of the classic Etch-A-Sketch toy, built with HTML, CSS and vanilla JavaScript as part of The Odin Project. Move your mouse over the screen to draw.

## Features

- Drawing grid generated entirely in JavaScript and laid out with flexbox
- Starts with a 16x16 grid
- Resizable grid, from 2x2 up to 100x100, that always fills the same screen area
- Three drawing modes: random colours, a colour of your choice, and an eraser
- Input validation on the grid size, so invalid entries leave the current grid untouched
- Styled to look like the original red toy, and scales down for smaller screens

## Controls

| Button | What it does |
|---|---|
| **E** | Eraser: hovering clears squares |
| **Colour swatch** | Pick a colour to draw with |
| **R** | Random colour for every square |
| **S.G** | Set grid: enter a new size between 2 and 100 |

## How to Use

1. Open the page. A 16x16 grid is ready to draw on.
2. Move your mouse across the screen to colour the squares.
3. Use the buttons along the bottom of the board to change mode.
4. Press **S.G** to start again with a different grid size.

## Running Locally

1. Clone or download this repository.
2. Open `index.html` in your browser, or serve the folder with the Live Server extension in VS Code.

## Built With

- HTML
- CSS (flexbox)
- JavaScript
