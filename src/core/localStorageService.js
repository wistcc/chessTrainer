const name = 'chessTrainer';
const emptyChessTrainer = {
    points: 0,
    currentLevel: 0,
    currentKata: 0,
    configurations: {
        validateLegalMoves: true,
        trashPiece: false,
        highlightLegalMoves: true,
        highlightPiece: true
    }
}

let objectIsCorrect = chessTrainer => {
    var chessTrainerKeys = Object.keys(JSON.parse(chessTrainer)).sort();
    var emptyChessTrainerKeys = Object.keys(emptyChessTrainer).sort();

    return JSON.stringify(chessTrainerKeys) === JSON.stringify(emptyChessTrainerKeys);
}

let get = () => {
    let chessTrainer = localStorage.getItem(name);

    if (chessTrainer === null || !objectIsCorrect(chessTrainer)) {
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