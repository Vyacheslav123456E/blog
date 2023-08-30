export const state = () => ({
  isDialog: false,
  article: [],
  error: [],
  count: 1,
  pagination: []
})

export const mutations = {
  setDialog(state, isDialog) {
    state.isDialog = isDialog
  },
  setArticle(state, payload){
    state.article = payload
  },
  setCount(state, payload){
    state.count = payload
  },
  setPagination(state, payload){
    state.pagination = payload
  },
  errors(state, payload){
    state.error = payload
  }
}
export const actions = {
  SOCKET_resSaveArticle({commit}, payload) {
    console.log(payload)
    if (payload.success === 0) {
      commit('setArticle', payload.data);
    }else {
      commit('errors', payload)
    }
  },
  saveArticle({commit}, payload) {
    this._vm.$socket.emit('save_article', payload)
  },
  getArticles({commit},payload) {
    this._vm.$socket.emit('get_article', payload,
      response => {
        if (response.success === 0) {
          commit('setArticle', response.data);
          commit('setCount', response.count);
        }else {
          commit('errors', response)
        }
      })
  }
}
