let onSnapEnd = function () {
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    this.getCurrentBoard.boardObject.position(this.getCurrentGame.fen());
}

let updateStatus = function () {
    var status = '';

    var moveColor = 'White';
    if (this.getCurrentGame.turn() === 'b') {
        moveColor = 'Black';
    }

    // checkmate?
    if (this.getCurrentGame.in_checkmate() === true) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
    }

    // draw?
    else if (this.getCurrentGame.in_draw() === true) {
        status = 'Game over, drawn position';
    }

    // game still on
    else {
        status = moveColor + ' to move';

        // check?
        if (this.getCurrentGame.in_check() === true) {
            status += ', ' + moveColor + ' is in check';
        }
    }

    //statusEl.html(status);
    this.status = status;
    this.pgn = this.getCurrentGame.pgn();
}


let onMouseoverSquare = function(square, piece) {
    // get list of possible moves for this square
    var moves = this.getCurrentGame.moves({
        square: square,
        verbose: true
    });

    // exit if there are no moves available for this square
    if (moves.length === 0) return;

    // highlight the square they moused over
    greySquare(square, this.getCurrentBoard.boardId);

    // highlight the possible squares for this piece
    for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to, this.getCurrentBoard.boardId);
    }
};

let onMouseoutSquare = function(square, piece) {
    removeGreySquares(this.getCurrentBoard.boardId);
};

let removeGreySquares = function(boardId) {
    $('#' + boardId + ' .square-55d63').css('background', '');
};

let greySquare = function(square, boardId) {
    var squareEl = $('#' + boardId + ' .square-' + square);

    var background = '#a9a9a9';
    if (squareEl.hasClass('black-3c85d') === true) {
        background = '#696969';
    }

    squareEl.css('background', background);
};

export default {
    onSnapEnd,
    updateStatus,
    onMouseoutSquare,
    onMouseoverSquare,
    removeGreySquares
}