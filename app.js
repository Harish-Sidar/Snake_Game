// // Game constsmtd and variable 

// let inputDir = {x:0,y:0};
// const  foodSound = new Audio('food.mp3');
// const  gameOverSound = new Audio('gameover.mp3');
// const  moveSound = new Audio('move.mp3');
// const  musicSound = new Audio('music.mp3');
// let speed = 2;
// let lastPaintTime = 0;
// let snakeArr = [ 
//     {x:13,y:15}
// ]

// food = {x:4,y:8};

// // game function 
// function main(ctime){
//     window.requestAnimationFrame(main)
//     console.log(ctime);
//     if((ctime - lastPaintTime)/1000<1/speed){
//         return;
//     }
//    lastPaintTime = ctime;
//    gameEngine();
    
// }

// function gameEngine(){
//    // part 1 udaint the snake array 
//    // part 2  Render(Dispaly) the snake and food 

//     board.innerHTML = "";
//     snakeArr.forEach((e,index)=>{
//         snakeElement = document.createElement('div');
//         snakeElement.style.gridRowStart = e.y;
//         snakeElement.style.gridColumnStart = e.x;
//         snakeElement.classList.add('snake');
//         if(index===0){
//             snakeElement.ClassList.add('head');

//         }
//         board.appendChild(snakeElement);

//     })
    
//     //Display the food 

//     foodElement = document.createElement('div');
//     foodElement.style.gridRowStart = food.y;
//     foodElement.style.gridColumnStart = food.x;
//     foodElement.classList.add('food');
//     board.appendChild(foodElement);
// }








// // Main logic start here
// window.requestAnimationFrame(main)


let inputDir = {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');

let speed = 5;
let lastPaintTime = 0;
let snakeArr = [{x:13, y:15}];
let food = {x:4, y:8};

let board = document.getElementById('board');  // Ensure this element exists in HTML

function main(ctime){
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function gameEngine(){
    board.innerHTML = "";
    
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if (index === 0) {
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);
    });

    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

window.requestAnimationFrame(main);
