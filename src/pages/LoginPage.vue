<template>
  <!-- me가 없어야 로그인 창이 보인다 -->
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md" style="max-width: 400px">
      <div class="backgrondBox p-5">
        <form @submit.prevent="onSubmitForm()">
          <div class="d-flex justify-content-center">
            <h1 class="home-title mb-4">LOGIN</h1>
          </div>
          <div class="mb-3">
            <input
              v-model="info.id"
              type="email"
              class="form-control"
              placeholder="Email을 입력해주세요."
              aria-describedby="emailHelp"
            />
            <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
            <span v-if="emailError" class="font14 mt-1 ml-2">
              Email을 입력해주세요.
            </span>
          </div>
          <div class="mb-3">
            <input
              v-model="info.pass"
              type="password"
              class="form-control"
              placeholder="비밀번호를 입력해주세요."
            />
            <div class="font14 mt-1 ml-2" v-if="passError">
              비밀번호를 입력해주세요.
            </div>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="loginCheck" />
            <label class="form-check-label me-5" for="loginCheck"
              >아이디 저장</label
            >
            <input type="checkbox" class="form-check-input" id="loginCheck2" />
            <label class="form-check-label" for="loginCheck2">자동로그인</label>
          </div>
          <div class="d-flex justify-content-center align-items-center mb-3">
            <button type="submit" class="btn btn-primary">로그인</button>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <div class="LoginLine"></div>
            <div class="ml-3 mr-3">또는</div>
            <div class="LoginLine"></div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onBeforeMount, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const emailError = ref(false);
    const passError = ref(false);
    let info = reactive({
      id: "",
      pass: "",
    });
    // const loginEmail = reactive({});
    // const loginPass = reactive({});

    const onSubmitForm = () => {
      //trim으로 잘라서 하나도 없으면
        if (info.id.trim().length == 0) {
          emailError.value = true;
          return
        }
        if (info.pass.trim().length == 0) {
          passError.value = true;
          return
        }
        localStorage.setItem('token', 'logged')
        emailError.value = false;
        passError.value = false;
        store.state.me = true
    };

    onBeforeMount(() => {
      // if (info.id !== "" && info.pass !== "") {
      //   state.loggedIn === true;
      //   route.replace("/Login");
      // }
    });

    return { emailError, passError, info, onSubmitForm, router, route, store };
  },
};
</script>

<style lang="sass" scoped>
.LoginLine
    width: 160px
.font14
  font-size: 14px
  color: red
</style>
