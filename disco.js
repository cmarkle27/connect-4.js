// Globals
ROWS = 5
COLS = 7

var Game = function() {
	this.board = []
	this.init()
}

Game.prototype.init = function() {
	for (var row = 0; row < ROWS; row++) {
		this.board[row] = []
		for (var col = 0; col < COLS; col++) {
			this.board[row][col] = 0
		}
	}
}

var game = new Game()
console.log(game.board)