var getUserChoice = function (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error')
    }
}

var getComputerChoice = function () {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    var winner;
    if (userChoice === computerChoice) {
        return 'The game was a tie';
    }
    if (userChoice === 'bomb') {
        return 'The user wins!'
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'The computer wins!'
    } else if (userChoice === 'rock' && computerChoice === 'scissors')
        return 'The user wins!';
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'The user wins!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'The computer wins!';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'The computer wins!';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'The user wins!';
    }
}

function playGame(userInput) {
    var userChoice = getUserChoice(userInput);
    console.log('User Choice', userChoice);
    var computerChoice = getComputerChoice();
    console.log('Computer Choice', computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    let result = document.getElementById('result');
    let winner = determineWinner(userChoice, computerChoice);
    let output = `You picked ${userChoice}, Computer picked ${computerChoice}. ${winner}`
    result.innerHTML = output;
}

var userInput = prompt();
playGame(userInput);
