<template>
  <div>
    <nav class="navbar navbar-expand-lg d-flex justify-content-between container">
      <!-- href대신 to를 사용하니까 링크 변경시 스핀이 안돔(리로딩이 없음) (router-link) -->
      <!-- 라우터를 사용하는 이유는 창 변경할 때 요청을 중간에 가로채서 맞는 컴포넌트를 찾아줌 (a태그보다 빠르다) -->
      <!-- to뒤에 경로나 :찍고 index.js의 name을 걸어주면 링크이동 -->
      <!-- index.js에서 설정한 home component가 여기에 들어온다 -->
      <router-link class="navbar-brand" :to="{ name: 'Home' }"><b>DeCommi</b></router-link>
      <ul class="navbar-nav">
        <li v-if="!store.state.me" class="nav-item active d-flex">
          <router-link class="nav-link mr-3" :to="{ name: 'Login' }">로그인</router-link>
          <router-link class="nav-link mr-3" :to="{ name: 'Signup' }">회원가입</router-link>
          <router-link class="nav-link" :to="{ name: 'Todos' }">Todos</router-link>
        </li>
        <li v-else class="nav-item active d-flex">
          <!-- <div class="d-flex align-items-center">
            <input type="text" class="form-control">
          </div> -->
          <router-link class="nav-link mr-3" :to="{ name: 'MyPage' }">마이페이지</router-link>
          <router-link class="nav-link mr-3" :to="{ name: 'UserEdit' }">회원정보 수정</router-link>
          <router-link class="nav-link mr-3" :to="{ name: 'Alarm' }">알림페이지</router-link>
          <router-link class="nav-link mr-3" :to="{ name: 'Main' }">메인페이지</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    function loginCheck() {
      if (localStorage.getItem("token") == null) {
        store.state.me = false
      } else if (localStorage.getItem("token") != null) {
        store.state.me = true
      }
    }
    onMounted(() => {
      loginCheck()
    })

    return { store, onMounted, loginCheck }
  },
};
</script>

<style lang="sass" scoped>
.navbar
  padding: 0 12px
  background-color: white

.navbar-brand
  font-weight: 700
</style>
