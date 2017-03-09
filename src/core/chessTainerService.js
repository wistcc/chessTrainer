let onSnapEnd = function () {
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    this.board.position(this.game.fen());
}

let updateStatus = function() {
    var status = '';

    var moveColor = 'White';
    if (this.game.turn() === 'b') {
        moveColor = 'Black';
    }

    // checkmate?
    if (this.game.in_checkmate() === true) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
    }

    // draw?
    else if (this.game.in_draw() === true) {
        status = 'Game over, drawn position';
    }

    // game still on
    else {
        status = moveColor + ' to move';

        // check?
        if (this.game.in_check() === true) {
            status += ', ' + moveColor + ' is in check';
        }
    }

    //statusEl.html(status);
    this.status = status;
    this.pgn = this.game.pgn();
}

export default {
    onSnapEnd,
    updateStatus
}