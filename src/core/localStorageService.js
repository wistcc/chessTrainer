const name = 'chessTrainer';
const emptyChessTrainer = {
    points: 0,
    level: [0]
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