function generateColors(n){
    //returns an array arr with n colors chosed rundomly
    let arr = [];

    for (let i = 0; i < n; i++) {
        let color = randomColor();      
        arr[i] = color;        
    }

    return arr;
}

function randomColor(){
    //Creates a random color in RGB form "rgb(r, g, b)"
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function goalColorPicker(){
    //Choses a random component of the array colors (chooses a random color)
    return colors[Math.floor(Math.random() * colors.length)];
}

function colorClicked(){
    //Function called when clicking on a square
    if(this.style.backgroundColor === goal_color){
        //Correct square selected
        colorCorrect();
    } else{
        //Incorrect square selected
        colorIncorrect(this);
    }
}

function colorCorrect(){
    //Function called when correct square is selected
    message_display.textContent = "Correct"
    top_container.style.backgroundColor = goal_color;

    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = goal_color;
    }
}

function colorIncorrect(square){
    //Function called when correct square is selected
    message_display.textContent = "Try Again";
    square.style.backgroundColor = "black";
}

//First Initialization
colors = generateColors(6);

console.log(colors);

let squares = document.querySelectorAll(".square");
let goal_color = goalColorPicker();
let color_display = document.querySelector("#colorDisplay");
let message_display = document.querySelector("#message");
let top_container = document.querySelector("#topContainer");

//Applying colors and listener to squares
for(let i = 0; i < squares.length; i++){
    //adding initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //adding listeners to squares
    squares[i].addEventListener("click", colorClicked);
}

color_display.textContent = goal_color;