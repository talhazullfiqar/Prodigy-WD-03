let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        isGameActive = false;
        alert(`${currentPlayer} has won!`);
        return;
    }

    if (!board.includes('')) {
        isGameActive = false;
        alert('Game is a draw!');
    }
};

const makeMove = (index) => {
    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerText = currentPlayer;
    handleResultValidation();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
};
