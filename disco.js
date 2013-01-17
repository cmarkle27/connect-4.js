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

Game.prototype.dropPiece = function(player, col) {
	for (var row = 0; row < ROWS; row++) {
		if (this.board[row][col] === 0) {
			this.board[row][col] = player
			break
		}
	}
}

Game.prototype.display = function(callback) {
	for (var row = ROWS; row >= 0 ; row--) {
		console.log(this.board[row]);
		// for (var col = 0; col < COLS; col++) {
		// 	callback(this.board[row][col], row, col)
		// }
	}
}

// opponent should reduce set to cols, rows, diags where total < 0 for defence
// opponent should reduce set to cols, rows, diags where total >= 0 for offence

/////////////////////////////////////////////////////////////////////////


var game = new Game()



