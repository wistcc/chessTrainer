import Vue from 'vue'
import Vuex from 'vuex'
import localStorageService from 'core/localStorageService';
let chessTrainer = localStorageService.get();

Vue.use(Vuex);

let updateLocalStorage = function() {
    localStorageService.set(state.chessTrainer);
}

const state = {
    chessTrainer: {
        points: chessTrainer.points,
        currentLevel: chessTrainer.currentLevel,
        currentKata: chessTrainer.currentKata,
        configurations: {
            validateLegalMoves: chessTrainer.configurations.validateLegalMoves,
            trashPiece: chessTrainer.configurations.trashPiece,
            highlightLegalMoves: chessTrainer.configurations.highlightLegalMoves,
            highlightPiece: chessTrainer.configurations.highlightPiece,
            name: chessTrainer.configurations.name
        }
    },
    currentGame: {},
    currentBoard: {
        boardObject: {},
        boardElement: {},
        boardId: ''
    }
}

const mutations = {
    UPDATE_KATA (state, kataIndex) {
        state.chessTrainer.currentKata = kataIndex;
        state.chessTrainer.points += 10;
        updateLocalStorage();
    },
    UPDATE_LEVEL (state, levelIndex) {
        state.chessTrainer.currentLevel = levelIndex;
        state.chessTrainer.points += 60;
        state.chessTrainer.currentKata = 0;
        updateLocalStorage();
    },
    UPDATE_CONFIGURATIONS (state, configurations) {
        if(!configurations.validateLegalMoves) {
            state.chessTrainer.configurations.highlightLegalMoves = false;
            state.chessTrainer.configurations.highlightPiece = false;
        }
        else {
            state.chessTrainer.configurations.trashPiece = false;
        }
        
        state.chessTrainer.configurations = configurations;
        updateLocalStorage();
    },
    UPDATE_CURRENT_GAME (state, currentGame) {
        state.currentGame = currentGame;
    },
    UPDATE_CURRENT_BOARD (state, currentBoard) {
        state.currentBoard = currentBoard;
    },
    UNDO_MOVE (state, playingWithComputer) {
        state.currentGame.undo();
        state.currentBoard.boardObject.position(state.currentGame.fen());

        if(playingWithComputer){
            state.currentGame.undo();
            state.currentBoard.boardObject.position(state.currentGame.fen());
        }
    }
}

const actions = {
    updateKata ({ commit }, kataIndex) {
        commit('UPDATE_KATA', kataIndex);
    },
    updateLevel ({ commit }, levelIndex) {
        commit('UPDATE_LEVEL', levelIndex);
    },
    updateConfigurations ({ commit }, configurations) {
        commit('UPDATE_CONFIGURATIONS', configurations);
    },
    updateCurrentGame ({ commit }, currentGame) {
        commit('UPDATE_CURRENT_GAME', currentGame);
    },
    updateCurrentBoard ({ commit }, currentBoard) {
        commit('UPDATE_CURRENT_BOARD', currentBoard);
    },
    undoMove ({ commit }, playingWithComputer) {
        commit('UNDO_MOVE', playingWithComputer);
    }
}

const getters = {
    getPoints: state => state.chessTrainer.points,
    getCurrentLevel: state => state.chessTrainer.currentLevel,
    getCurrentKata: state => state.chessTrainer.currentKata,
    getConfigurations: state => state.chessTrainer.configurations,
    getCurrentGame: state => state.currentGame,
    getCurrentBoard: state => state.currentBoard,
    getCurrentBoardElement: state => state.currentBoardElement,
    getCurrentBoardId: state => state.currentBoardId
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})