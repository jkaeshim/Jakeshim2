
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
            margin: 20px auto;
        }
        .cell {
            width: 75px;
            height: 75px;
            font-size: 2rem;
            text-align: center;
            border: 2px solid #000;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic Tac Toe</h1>
    <div class="board" id="board"></div>
    <p id="status"></p>
    <button onclick="resetBoard()">Reset</button>

    <script>
        const board = document.getElementById("board");
        const status = document.getElementById("status");
        const cells = [];

        let currentPlayer = "X";
        let gameActive = true;

        // Create the Tic Tac Toe grid
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            cell.addEventListener("click", () => cellClick(i));
            board.appendChild(cell);
            cells.push(cell);
        }

        // Check for a winner
        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];

            for (const pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
                    gameActive = false;
                    return cells[a].textContent;
                }
            }

            if (![...cells].some(cell => cell.textContent === "")) {
                gameActive = false;
                return "Draw";
            }

            return null;
        }

        // Handle cell click
        function cellClick(index) {
            if (!gameActive || cells[index].textContent !== "") return;

            cells[index].textContent = currentPlayer;
            const winner = checkWinner();
            if (winner) {
                if (winner === "Draw") {
                    status.textContent = "It's a draw!";
                } else {
                    status.textContent = `${winner} wins!`;
                }
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.textContent = `Current player: ${currentPlayer}`;
            }
        }

        // Reset the board
        function resetBoard() {
            for (const cell of cells) {
                cell.textContent = "";
            }
            status.textContent = "";
            currentPlayer = "X";
            gameActive = true;
        }
    </script>
</body>
</html>
