const anime = require('animejs');
const gridContainer = document.querySelector('.animated-grid');
const fragment = document.createDocumentFragment();
const grid = [17,17];
const col = grid[0];
const row = grid[1];
const piecesOfRowsAndCols = col * row;

for(let i = 0; i < piecesOfRowsAndCols; i++) {
    fragment.appendChild(document.createElement('div'));    
}

gridContainer.appendChild(fragment);

const animatedGrid = anime.timeline({
    targets: '.animated-grid div',
    easing: 'easeInOutSine',
    delay: anime.stagger(50),
    loop: true,
    autoplay: false
})
.add({
    translateX: [
        {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
        {value: anime.stagger('.1rem', {grid:grid, from: 'center', axis: 'x' }) }
    ],
    translateY: [
        {value: anime.stagger('-.1rem', {grid:grid, from: 'center', axis: 'y'}) },
        {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
    ],
    duration: 1000,
    scale: .5,
    delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
    translateX: () => anime.random(-10, 10),
    translateY: () => anime.random(-10, 10),
    delay: anime.stagger(8, {from: 'last'})
})
.add({
    translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
    translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
    rotate: 0,
    scaleX: 2.5,
    scaleY: .25,
    delay: anime.stagger(4, {from: 'center'})
})
.add({
    rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
    delay: anime.stagger(50, {grid:grid, from: 'center'})
})
.add({
    translateX: 0,
    translateY: 0,
    scale: .5,
    scaleX: 1,
    rotate: 180,
    duration: 1000,
    delay: anime.stagger(100, {grid:grid, from: 'center'})
})
.add({
    scaleY: 1,
    scale: 1,
    delay: anime.stagger(20, {grid: grid, from: 'center'})
})

animatedGrid.play();
