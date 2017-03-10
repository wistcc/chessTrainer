let onSnapEnd = function () {
    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    this.getCurrentBoard.position(this.getCurrentGame.fen());
}

let updateStatus = function() {
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

export default {
    onSnapEnd,
    updateStatus
}