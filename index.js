const generateRandom = () => Math.floor(Math.random() * 100) + 1;

let randomNumber = generateRandom();
let levelIndex = 0;
console.log(randomNumber);
let attempts = 0;

const levels = [
    { image: '1.png', quest: 'Level 1: Find the hidden key by guessing the number!' },
    { image: '2.png', quest: 'Level 2: Find the treasure box code!' },
    { image: '3.png', quest: 'Level 3: Unlock the ancient door by guessing the right number!' },
    { image: '4.png', quest: 'Level 4: Solve the magical riddle with a number guess!' },
    // { image: '5.png', quest: 'Level 5: Claim the final treasure by finding the number!' }
];

function displayLevel() {
    const level = levels[levelIndex];
    document.getElementById('levelImage').src = level.image;
    display(level.quest);
}

function updateLevel() {
    display(`Congratulations! You completed "${levels[levelIndex].quest}" in ${attempts} attempts.`);
    attempts = 0;
    levelIndex++;

    if (levelIndex < levels.length) {
        randomNumber = generateRandom();
        console.log(randomNumber);
        setTimeout(displayLevel, 2000);  // Pause before displaying the next level
    } else {
        display("You completed all levels! Restarting the game...");
        setTimeout(resetGame, 3000);  // Restart game after showing the final message
    }
}

function resetGame() {
    levelIndex = 0;
    attempts = 0;
    randomNumber = generateRandom();
    console.log(generateRandom);
    displayLevel();
}

document.getElementById('btn').addEventListener('click', function () {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        display("Please enter a valid number between 1 and 100.");
        return;
    }
    
    attempts++;
    
    if (guess === randomNumber) {
        updateLevel();
    } else if (guess < randomNumber) {
        display("Your guess is too low. Try a higher number.");
    } else {
        display("Your guess is too high. Try a lower number.");
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}

// Initial setup
displayLevel();
