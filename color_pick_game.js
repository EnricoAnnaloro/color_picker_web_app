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

function setupSquares(){
    //Applying colors and listener to squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            //adding initial color to squares
            squares[i].style.backgroundColor = colors[i];
    
            //adding listeners to squares
            squares[i].addEventListener("click", colorClicked);

            //Makes shure that all squares are shown
            squares[i].style.display = "block";
        }
        else{
            //Hides unused squares
            squares[i].style.display = "none";
        }
    }
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
    replay_button.textContent = "PLAY AGAIN?"
    top_container.style.backgroundColor = goal_color;

    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = goal_color;
    }
}

function colorIncorrect(square){
    //Function called when correct square is selected
    message_display.textContent = "Try Again";
    square.style.backgroundColor = "#222831";
}

function resetGame(){
    colors = generateColors(num_of_colors);
    goal_color = goalColorPicker();

    setupSquares();

    //Displays the rgb string in the title for guessing
    color_display.textContent = goal_color;

    //reset background color to default
    top_container.style.backgroundColor = "steelblue";
}

function easyGame(){
    //Start an easy Mode Game
    easy_button.classList.add("selected");
    hard_button.classList.remove("selected");
    
    num_of_colors = 3;
    resetGame();
}

function hardGame(){
    //Start an easy Mode Game
    hard_button.classList.add("selected");
    easy_button.classList.remove("selected");

    num_of_colors = 6;
    resetGame();
}

//First Initialization
let num_of_colors = 6;
let colors = generateColors(num_of_colors);
let goal_color = goalColorPicker();

let squares = document.querySelectorAll(".square");
let color_display = document.querySelector("#colorDisplay");
let message_display = document.querySelector("#message");
let top_container = document.querySelector("#topContainer");
let replay_button = document.querySelector("#replayButton");
let easy_button = document.querySelector("#easyButton");
let hard_button = document.querySelector("#hardButton");

setupSquares();

//Adds resetGame func as listener to button
replay_button.addEventListener("click", resetGame);

//Adds easyMode func as listener to button
easy_button.addEventListener("click", easyGame);

//Adds easyMode func as listener to button
hard_button.addEventListener("click", hardGame);



//Displays the rgb string in the title for guessing
color_display.textContent = goal_color;