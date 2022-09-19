// import axios from "@/axios";

export default {
  namespaced: true,
  state: {
    me: null,
    bookmark: [],
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
    addBookmark(state, payload) {
      state.bookmark.push(payload);
    },
    removeBookmark(state, payload) {
      const index = state.bookmark.findIndex((v) => v.id === payload.id);
      state.bookmark.splice(index, 1);
    },
  },
  actions: {
    signUp({ commit }, payload) {
      // axios.post("http://localhost:3086/user", {
      //   id: payload.id,
      //   pw: payload.pw,
      //   email: payload.email,
      // })
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
    addBookmark({ commit }, payload) {
      commit("addBookmark", payload);
    },
    removeBookmark({ commit }, payload) {
      commit("removeBookmark", payload);
    },
    // getters는 component안에서 사용하는 computed라고 생각하면 편함
  },
  getters: {
    toastMessageWithSmile(state) {
      return state.toastMessage + "^-^";
    },
  },
};
