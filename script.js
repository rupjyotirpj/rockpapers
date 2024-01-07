let isUserVsUser = false;

function userChoice(choice) {
    if (isUserVsUser) {
        const userChoice = choice;
        const opponentChoice = prompt("Enter opponent's choice (rock, paper, or scissors):");

        document.getElementById('opponent-choice').innerHTML = `Opponent chose ${opponentChoice}.`;

        const result = determineWinner(userChoice, opponentChoice);
        document.getElementById('result').innerHTML = result;
    } else {
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        document.getElementById('opponent-choice').innerHTML = `Computer chose ${computerChoice}.`;

        const result = determineWinner(choice, computerChoice);
        document.getElementById('result').innerHTML = result;
    }
}

function determineWinner(userChoice, opponentChoice) {
    if (userChoice === opponentChoice) {
        return 'It\'s a tie!';
    }

    if ((userChoice === 'rock' && opponentChoice === 'scissors') ||
        (userChoice === 'paper' && opponentChoice === 'rock') ||
        (userChoice === 'scissors' && opponentChoice === 'paper')) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function changeOpponent() {
    const opponentSelection = document.getElementById('opponent-selection');
    const selectedValue = opponentSelection.value;
    isUserVsUser = selectedValue === 'user';

    if (isUserVsUser) {
        const gameLink = generateGameLink();
        document.getElementById('game-link').value = gameLink;
    } else {
        document.getElementById('game-link').value = '';
    }
}

function generateGameLink() {
    const gameId = Math.random().toString(36).substr(2, 9);
    const url = `${window.location.href}?gameId=${gameId}`;
    return url;
}

// Check if the game link is provided in the URL
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('gameId');

    if (gameId) {
        // If gameId is present, it's a user-vs-user game
        isUserVsUser = true;
        document.getElementById('opponent-selection').value = 'user';
        document.getElementById('game-link').value = window.location.href;
    }
};
