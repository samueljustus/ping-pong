const winningScoreSelect = document.querySelector('#playto')
const resetButton = document.querySelector('#reset')
let winningScore = 6;
let gameOver = false;  

const p1 = {
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display'),
    score: 0
}

const p2 = {
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display'),
    score: 0
}

function updateScore(player, opponent) {
    if (!gameOver) {
        player.score += 1
        if (player.score === winningScore) {
            gameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score
    }
}



p1.button.addEventListener('click', () => {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScore(p2, p1)
})

const reset = function() {
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = 0;
    p2.display.innerText = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-success', 'has-text-danger')
    p1.button.disabled = false;
    p2.button.disabled = false;
}
 
resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', (e) => {
    winningScore = parseInt(e.target.value);
    reset();
})