var snakeShape = "###O";

function eat() {
    snakeShape = "#" + snakeShape;
    document.getElementById("snake").innerHTML = snakeShape;
}