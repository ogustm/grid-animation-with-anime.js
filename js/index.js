const anime = require('animejs');
const divForGrid = document.querySelector('.animated-grid');
const fragment = document.createDocumentFragment();
const grid = [17,17];
const col = grid[0];
const row = grid[1];
const numberOfPieces = col * row;

for(let i = 0; i < numberOfPieces; i++) {
    fragment.appendChild(document.createElement('div'));    
}

divForGrid.appendChild(fragment);

const animatedGrid = anime.timeline({
    targets: 'animated-grid div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay:false
})
