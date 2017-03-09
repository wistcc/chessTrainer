import Vue from 'vue'
import Vuex from 'vuex'
import localStorageService from 'core/localStorageService';
let chessTrainer = localStorageService.get();

Vue.use(Vuex)

let updateLocalStorage = function(){
    localStorageService.set(state.chessTrainer);
}

const state = {
    chessTrainer: {
        points: chessTrainer.points || 0,
        currentKata: {
            level: chessTrainer.currentKata.level || 0,
            kata: chessTrainer.currentKata.kata || 0
        }
    }
}

const mutations = {
    UPDATE_KATA (state, kataIndex){
        state.chessTrainer.currentKata.kata = kataIndex;
        updateLocalStorage();
    },
    UPDATE_LEVEL (state, levelIndex){
        state.chessTrainer.currentKata.level = levelIndex;
        state.chessTrainer.currentKata.kata = 0;
        updateLocalStorage();
    },
    UPDATE_POINTS (state, points){
        state.chessTrainer.points = points;
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
    updatePoints ({ commit }, points) {
        commit('UPDATE_POINTS', points);
    }
}

const getters = {
    getPoints: state => state.chessTrainer.points,
    getCurrentLevel: state => state.chessTrainer.currentKata.level,
    getCurrentKata: state => state.chessTrainer.currentKata.kata
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})