export default {
  namespaced: true,
  state: {
    me: null,
  },
  mutations: {
    setMe(state, payload) {
      state.me = payload;
    },
    changeEmail(state, payload) {
      state.me.email = payload.email;
    },
    changePassword(state, payload) {
      state.me.pass = payload.pass;
    },
  },
  actions: {
    signUp({ commit }, payload) {
      commit("setMe", payload);
    },
    favTags({ commit }, payload) {
      commit("setMe", payload);
    },
    dislikeTags({ commit }, payload) {
      commit("setMe", payload);
    },
    logIn({ commit }, payload) {
      commit("setMe", payload);
    },
    logOut({ commit }) {
      commit("setMe", null);
    },
    changeEmail({ commit }, payload) {
      commit("changeEmail", payload);
    },
    changePassword({ commit }, payload) {
      commit("changePassword", payload);
    },
    // getters는 component안에서 사용하는 computed라고 생각하면 편함
  },
  getters: {
    toastMessageWithSmile(state) {
      return state.toastMessage + "^-^";
    },
  },
};
