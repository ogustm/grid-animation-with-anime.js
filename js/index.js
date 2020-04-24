const animatedGrid = document.querySelector('.animated-grid');
const fragment = document.createDocumentFragment();
const grid = [17,17];
const col = grid[0];
const row = grid[1];
const numberOfPieces = col * row;

for(let i = 0; i < numberOfPieces; i++) {
    fragment.appendChild(document.createElement('div'));    
}
