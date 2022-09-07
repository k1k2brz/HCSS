<template>
  <div class="pt-3 pb-3">
    <nav
      class="navbar navbar-expand-lg d-flex justify-content-between container"
    >
      <!-- href대신 to를 사용하니까 링크 변경시 스핀이 안돔(리로딩이 없음) (router-link) -->
      <!-- 라우터를 사용하는 이유는 창 변경할 때 요청을 중간에 가로채서 맞는 컴포넌트를 찾아줌 (a태그보다 빠르다) -->
      <!-- to뒤에 경로나 :찍고 index.js의 name을 걸어주면 링크이동 -->
      <!-- index.js에서 설정한 home component가 여기에 들어온다 -->
      <a href="#" @click="logoBtn" class="navbar-brand"><b>DeCommi</b></a>
      <ul class="navbar-nav">
        <li
          v-if="!store.state.me"
          class="nav-item active d-flex align-items-center"
        >
          <router-link class="nav-link mr-3" :to="{ name: 'Login' }"
            >로그인</router-link
          >
          <router-link class="nav-link mr-3" :to="{ name: 'Signup' }"
            >회원가입</router-link
          >
        </li>
        <li
          v-else
          class="nav-item active d-flex justify-content-center align-items-center"
        >
          <!-- <div class="d-flex align-items-center">
            <input type="text" class="form-control">
          </div> -->
          <router-link class="nav-link mr-3" :to="{ name: 'Main' }"
            >홈</router-link
          >
          <router-link class="nav-link mr-3" :to="{ name: 'BookMark' }"
            >북마크</router-link
          >
          <router-link class="nav-link mr-3" :to="{ name: 'PopularTag' }"
            >태그찾기</router-link
          >
          <router-link class="nav-link mr-4" :to="{ name: 'Alarm' }"
            >알림</router-link
          >
          <div v-if="navMenubar" class="position-relative menu-container">
            <div class="position-absolute menu-box">
              <div class="pl-2 pr-2 pt-3 pb-3 d-flex flex-column gap-3">
                <div class="p-3 grey-bg d-flex flex-column">
                  <span>현재 로그인 계정</span>
                  <span>{{ me.id }}</span>
                </div>
                <div class="d-flex flex-column ml-2">
                  <router-link
                    class="nav-link menu-hover menu-btn"
                    :to="{ name: 'MyPage' }"
                    >마이페이지</router-link
                  >
                  <router-link
                    class="menu-hover menu-btn nav-link"
                    :to="{ name: 'ManagerPage' }"
                    >관리자페이지</router-link
                  >
                  <button class="menu-btn">내 태그 설정</button>
                  <router-link
                    class="menu-hover menu-btn nav-link"
                    :to="{ name: 'UserEditPass' }"
                    >회원정보 수정</router-link
                  >
                  <router-link
                    class="menu-hover menu-btn nav-link"
                    :to="{ name: 'ServiceNotice' }"
                    >고객센터</router-link
                  >
                  <button @click="onLogout" class="menu-btn">로그아웃</button>
                </div>
              </div>
            </div>
          </div>
          <div
            @click="navMenuBtn"
            class="nav-menu-circle d-flex justify-content-center align-items-center"
          >
            <button v-if="navMenuicon" class="bi bi-caret-left-fill"></button>
            <button v-else class="bi bi-caret-down-fill"></button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const navMenubar = ref(false);
    const navMenuicon = ref(true);

    const navMenuBtn = () => {
      if (navMenubar.value == false) {
        navMenubar.value = true;
        navMenuicon.value = false;
      } else if (navMenubar.value == true) {
        navMenubar.value = false;
        navMenuicon.value = true;
      }
    };

    function loginCheck() {
      if (localStorage.getItem("token") == null) {
        store.state.me = false;
      } else if (localStorage.getItem("token") != null) {
        store.state.me = true;
      }
    }
    onMounted(() => {
      loginCheck();
    });

    const logoBtn = () => {
      if (store.state.me == true) {
        router.push({
          name: "Main",
        });
      } else if (store.state.me == false) {
        router.push({
          name: "Home",
        });
      }
    };

    const onLogout = () => {
      store.dispatch("users/logOut");
      store.state.me == false;
      router.push({
        name: "Home",
      });
    };

    const me = computed(() => {
      return store.state.users.me;
    });

    return {
      store,
      onMounted,
      loginCheck,
      logoBtn,
      navMenubar,
      navMenuBtn,
      navMenuicon,
      onLogout,
      me,
    };
  },
};
</script>

<style lang="sass" scoped>
.navbar
  padding: 0 12px

.navbar-brand
  font-weight: 700

.nav-menu-circle
  background-color: #FFDCDC
  border-radius: 50%
  width: 24px
  height: 24px
  padding: 3px

.menu-container
  top: 25px
  right: 155px

.menu-box
  background-color: #FFDCDC
  border-radius: 10px

.grey-bg
  background-color: lightgrey
  border-radius: 15px

.menu-btn
  border: none
  background: none
  &:hover
    color: black
    font-weight: 300

.menu-hover
  &:hover
    background-color: #FFCACA
</style>
