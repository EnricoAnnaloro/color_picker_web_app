function colorClicked(){
    console.log(this.style.backgroundColor)
    console.log(goal_color)
   if(this.style.backgroundColor === goal_color){
       alert("FOund")
   }
}

colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)",
];

let squares = document.querySelectorAll(".square");
let goal_color = colors[3];
let color_display = document.querySelector("#colorDisplay");

console.log(squares);

for(let i = 0; i < squares.length; i++){
    //adding initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //adding listeners to squares
    squares[i].addEventListener("click", colorClicked);
}

color_display.textContent = colors[3];