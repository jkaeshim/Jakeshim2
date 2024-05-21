## WHAT OUR CODE DOES

What our code does is it creates a user friendly chess board using HTML, CSS and JS. It uses HTMl to create an interactive chess board where you can move the pieces just like an actual chess game. Now we'll go more in depth about the coding.

## HTML Structure
Two <div class="playSide"> elements are used to display players' sides, one for AI (Black) and another for me (White). They use CSS for positioning and styling, also using a filter to invert colors.
Two <svg class="chessBoard"> elements represent the chessboards where the game is played. They are styled and positioned using CSS.

![Image Alt Text](images/ss1.jpg)

## CSS Styling
Various classes such as .circle, .chessPiece, and .playText are defined to style the chess pieces, the text within the player bars, and potential move highlights.
The .playSide and .chessBoard classes define the fundamental layout and appearance of the game's interface.
Additional styling is applied to the container and movement list to enhance visual organization and accessibility.

JavaScript Functionalities
The script contains multiple functions and listeners to handle game dynamics:

Initialization and Setup
Arrays define the initial positions of the chess pieces on the board.
Chess pieces are laid out on the board using SVG text elements within a loop that places them according to the arrays.
Event Listeners and Handlers
gameOperator(e) and selectPiece(e) are crucial functions hooked to mouse events:
gameOperator handles the game's interactivity based on the mouse's position, updating the cursor and managing game stages.
selectPiece is called when a piece is selected, enabling movement and capturing logic based on the piece type and game rules.
Movement and Gameplay Logic
The opponentMoves, moveLine, moveSpace, and setPiece functions manage piece movements and rule enforcement:
opponentMoves swaps pieces to reflect moves made by the opponent.
moveLine and moveSpace are used to calculate valid moves for pieces like rooks, bishops, and knights, marking potential destinations.
setPiece finalizes the movement of a piece, updating the board state and switching turns.

## Attack and Defense
attackPiece changes the board state based on attack interactions between pieces, including capturing.

Summary
This code effectively creates a dynamic, interactive chess game. Players can move pieces according to chess rules, capture opponents' pieces, and visually track game progress. Each function is designed to handle specific aspects of the game mechanics, from initial setup to piece movement and rule enforcement.