const userChoice = document.querySelectorAll('li');
const resultSpan = document.querySelector('.result-span')
let userSpan = document.querySelector('.user-span')
let computerSpan = document.querySelector('.computer-span')
userSpan.innerHTML = "0";
computerSpan.innerHTML = "0";
resultSpan.innerHTML = "Select an option to play the game!"

function play() {
        userChoice.forEach((choice) => {
            choice.addEventListener('click', (e) => {
            computerChoice = Math.floor(Math.random() * 3)
            console.log(computerChoice)
            console.log(e.target.classList.contains)
                if (e.target.classList.contains('rock') && computerChoice == 1) {
                    resultSpan.innerHTML = "Paper covers Rock, Computer wins!"
                    computerSpan.innerHTML++
                } else if (e.target.classList.contains('rock') && computerChoice == 2) {
                    resultSpan.innerHTML = "Rock smashes Scissors, You win!"
                    userSpan.innerHTML++
                } else if (e.target.classList.contains("paper") && computerChoice == 0) {
                    resultSpan.innerHTML = "Paper covers Rock, you win!"
                    userSpan.innerHTML++
                } else if (e.target.classList.contains('paper') && computerChoice == 2) {
                    resultSpan.innerHTML = "Scissors cuts Paper, Computer wins!"
                    computerSpan.innerHTML++
                } else if (e.target.classList.contains('scissors') && computerChoice == 0) {
                    resultSpan.innerHTML = "Rock smashes Scissors, Computer wins!"
                    computerSpan.innerHTML++
                } else if (e.target.classList.contains('scissors') && computerChoice == 0) {
                    resultSpan.innerHTML = "Scissors cut Paper, you win!"
                    userSpan.innerHTML++
                } else {
                    resultSpan.innerHTML = "It's a tie!"
                }
            })
        })
}

play()