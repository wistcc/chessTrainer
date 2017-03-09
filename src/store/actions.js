export const updateKata = ({ dispatch }, kataIndex) => {
  dispatch('UPDATE_KATA', kataIndex)
}

export const updateLevel = ({ dispatch }, levelIndex) => {
  dispatch('UPDATE_LEVEL', kataIndex)
}

export const updatePoints = ({ dispatch }, points) => {
  dispatch('UPDATE_POINTS', points)
}