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
        points: chessTrainer.points || 0,
        currentLevel: chessTrainer.currentLevel || 0,
        currentKata: chessTrainer.currentKata || 0,
        configurations: {
            validateLegalMoves: chessTrainer.configurations.validateLegalMoves || true,
            highlightLegalMoves: chessTrainer.configurations.highlightLegalMoves || false,
            highlightPiece: chessTrainer.configurations.highlightPiece || false
        }
    },
    currentGame: {},
    currentBoard: {}
}

const mutations = {
    UPDATE_KATA (state, kataIndex){
        state.chessTrainer.currentKata = kataIndex;
        state.chessTrainer.points += 10;
        updateLocalStorage();
    },
    UPDATE_LEVEL (state, levelIndex){
        state.chessTrainer.currentLevel = levelIndex;
        state.chessTrainer.points += 60;
        state.chessTrainer.currentKata = 0;
        updateLocalStorage();
    },
    UPDATE_CONFIGURATIONS (state, configurations){
        state.chessTrainer.configurations = configurations;
        updateLocalStorage();
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
    }
}

const getters = {
    getPoints: state => state.chessTrainer.points,
    getCurrentLevel: state => state.chessTrainer.currentLevel,
    getCurrentKata: state => state.chessTrainer.currentKata,
    getConfigurations: state => state.chessTrainer.configurations,
    getCurrentGame: state => state.currentGame,
    getCurrentBoard: state => state.currentBoard
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})