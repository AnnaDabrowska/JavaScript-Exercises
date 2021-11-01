function rockPaperScissors(firstPlayer, secondPlayer) {
    if (firstPlayer == "rock" && secondPlayer == "scissors") {
        console.log("First player wins")
    } else if (firstPlayer == "paper" && secondPlayer == "rock") {
        console.log("First player wins")
    } else if (firstPlayer == "scissors" && secondPlayer == "paper") {
        console.log("First player wins")
    } else if (firstPlayer == "scissors" && secondPlayer == "rock") {
        console.log("Second player wins")
    } else if (firstPlayer == "rock" && secondPlayer == "paper") {
        console.log("Second player wins")
    } else if (firstPlayer == "paper" && secondPlayer == "scissors") {
        console.log("Second player wins")
    } else {
        console.log("Draw")
    }
}

rockPaperScissors("rock", "rock")      // Draw
rockPaperScissors("rock", "paper")     // Second player wins
rockPaperScissors("rock", "scissors")  // First player wins
rockPaperScissors("paper", "scissors") // Second player wins
