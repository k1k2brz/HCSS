export default {
  namespaced: true,
  state: {
    me: null,
  },
  mutations: {
    setMe(state, payload) {
      state.me = payload;
    },
  },
  actions: {
    signUp({ commit }, payload) {
      commit("setMe", payload);
    },
    logIn({ commit }, payload) {
      commit("setMe", payload);
    },
    logOut({ commit }) {
      commit("setMe", null);
    },
    // getters는 component안에서 사용하는 computed라고 생각하면 편함
  },
  getters: {
    toastMessageWithSmile(state) {
      return state.toastMessage + "^-^";
    },
  },
};
