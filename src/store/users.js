// 사용자 관련된 것들
// mutations과 actions를 거쳐가는 걸 잘 보자.
export const state = () => ({
  // me가 null이면 비로그인 상태
  me: null,
  // 숙제 (팔로잉 팔로워 더미데이터 뺄 수 있게 구현하기(추가는X))
  // 숙제 - 여기에 더미 데이터를 넣는다. (git에서 2장 다운받아서 다시 풀어볼것)
  // 더미데이터는 백엔드 개발자와 어떻게 들어갈지 상의를 해야한다
  followerList: [],
  followingList: [],
  hasMoreFollower: true,
  hasMoreFollowing: true,
});

const totalFollowers = 8;
const totalFollowings = 6;
const limit = 3;

// actions와 mutations를 만들고 그 다음 화면구현을 시작한다.
export const mutations = {
  // mutations는 비동기 작업이 있으면 안된다. (ajax를 못 씀)
  // state부분은 여기서 만들어주는게 좋다
  setMe(state, payload) {
    state.me = payload;
  },
  changeNickname(state, payload) {
    state.me.nickname = payload.nickname;
  },
  // 팔로워, 팔로잉 추가하기
  addFollower(state, payload) {
    state.followerList.push(payload);
  },
  addFollowing(state, payload) {
    state.followingList.push(payload);
  },
  // 팔로워, 팔로잉 제거
  removeFollower(state, payload) {
    // payload는 객체로 id를 가지고 있다.
    const index = state.followerList.findIndex((v) => v.id === payload.id);
    state.followerList.splice(index, 1);
  },
  removeFollowing(state, payload) {
    const index = state.followingList.findIndex((v) => v.id === payload.id);
    state.followingList.splice(index, 1);
  },
  loadFollowings(state) {
    const diff = totalFollowings - state.followingList.length;
    const fakeUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map((v) => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000),
      }));
    state.followingList = state.followingList.concat(fakeUsers);
    state.hasMoreFollowing = fakeUsers.length === limit;
  },
  loadFollowers(state) {
    const diff = totalFollowers - state.followerList.length;
    const fakeUsers = Array(diff > limit ? limit : diff)
      .fill()
      .map((v) => ({
        id: Math.random().toString(),
        nickname: Math.floor(Math.random() * 1000),
      }));
    state.followerList = state.followerList.concat(fakeUsers);
    state.hasMoreFollower = fakeUsers.length === limit;
  },
};

// actions가 대신 비동기적 작업을 해줌
export const actions = {
  signUp({ commit, state }, payload) {
    // 서버에 get 요청
    this.$axios.post("/user", {
      // REST 비스무리한 API, HTTP API
      // signup에서 보낸 것들 이게 서버로 출발한다
      email: payload.email,
      nickname: payload.nickname,
      password: payload.password,
    });
    //서버에 회원가입 요청을 보내는 부분
    // null에 넣어줄 것 / payload가 회원정보가 됨
    commit("setMe", payload);
  },
  logIn({ commit }, payload) {
    commit("setMe", payload);
  },
  logOut({ commit }, payload) {
    commit("setMe", null);
  },
  // profile의 changeNickname
  changeNickname({ commit }, payload) {
    commit("changeNickname", payload);
  },
  addFollowing({ commit }, payload) {
    commit("addFollowing", payload);
  },
  addFollower({ commit }, payload) {
    commit("addFollower", payload);
  },
  removeFollowing({ commit }, payload) {
    // 비동기 요청이 들어감
    commit("removeFollowing", payload);
  },
  removeFollower({ commit }, payload) {
    commit("removeFollower", payload);
  },
  loadFollowers({ commit, state }, payload) {
    if (state.hasMoreFollower) {
      commit("loadFollowers");
    }
  },
  loadFollowings({ commit, state }, payload) {
    if (state.hasMoreFollowing) {
      commit("loadFollowings");
    }
  },
};
