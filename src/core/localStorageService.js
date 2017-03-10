const name = 'chessTrainer';
const emptyChessTrainer = {
    points: 0,
    currentLevel: 0,
    currentKata: 0,
    configurations: {
        validateLegalMoves: true,
        trashPiece: true,
        highlightLegalMoves: true,
        highlightPiece: true
    }
}

let get = () => {
    let chessTrainer = localStorage.getItem(name);

    if (chessTrainer === null) {
        return set();
    }

    return JSON.parse(chessTrainer);
}

let set = (chessTrainer = emptyChessTrainer) => {
    localStorage.setItem(name, JSON.stringify(chessTrainer));
    return chessTrainer;
}

export default {
    get,
    set
}