let result = "";

function rockPaperScissors(firstPlayer, secondPlayer) {
    if (firstPlayer === "rock" && secondPlayer === "scissors") {
        result = "First player wins"
    } else if (firstPlayer === "paper" && secondPlayer === "rock") {
        result = "First player wins"
    } else if (firstPlayer === "scissors" && secondPlayer === "paper") {
        result = "First player wins"
    } else if (firstPlayer === "scissors" && secondPlayer === "rock") {
        result = "Second player wins"
    } else if (firstPlayer === "rock" && secondPlayer === "paper") {
        result = "Second player wins"
    } else if (firstPlayer === "paper" && secondPlayer === "scissors") {
        result = "Second player wins"
    } else if (firstPlayer === secondPlayer) {
        result = "Draw"
    } else {
        result = 'Argument error';
    }
    return result
}


console.log(rockPaperScissors("paper", "scissors")) // 'Second player wins'
console.log(rockPaperScissors("rock", "potatoes"))  // 'Argument error'
console.log(rockPaperScissors("glue", "scissors"))  // 'Argument error'
console.log(rockPaperScissors("rock", "rock"))      // 'Draw'

