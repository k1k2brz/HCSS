<template>
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md">
      <form ref="form" @submit.prevent="onSubmitForm">
        <div class="d-flex justify-content-center">
          <h1 class="home-title mb-4">SIGN-UP</h1>
        </div>
        <div class="mb-3">
          <input
            type="email"
            v-model="info.id"
            class="form-control"
            placeholder="아이디를 입력해주세요."
            aria-describedby="emailHelp"
          />
          <div v-show="idError" class="font14 mt-1 ml-2">
            Email이 올바르지 않습니다.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="info.pass"
            class="form-control"
            placeholder="비밀번호를 입력해주세요."
          />
          <div v-show="passError" class="font14 mt-1 ml-2">
            비밀번호를 입력해주세요.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="info.repass"
            class="form-control"
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <div v-show="repassError" class="font14 mt-1 ml-2">
            비밀번호가 일치하지 않습니다.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="email"
            v-model="info.email"
            class="form-control"
            placeholder="이메일을 입력해주세요."
            aria-describedby="emailHelp"
          />
          <div v-show="emailError" class="font14 mt-1 ml-2">
            Email을 입력해주세요.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="email"
            v-model="info.certify"
            class="form-control"
            placeholder="인증번호를 입력해주세요."
            aria-describedby="emailHelp"
          />
          <div v-show="secuError" class="font14 mt-1 ml-2">
            Email을 입력해주세요.
          </div>
          <div id="emailHelp" class="form-text">
            10분 이내 메일이 도착하지 않으면 다시 시도해주세요.
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center flex-column"
        >
          <button type="submit" class="btn btn-primary">회원가입</button>
          <div class="d-flex">
            <span> 계정이 있으신가요? </span>
            <router-link
              class="nav-link purple-color ml-1"
              :to="{ name: 'Login' }"
              >로그인</router-link
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";

export default {
  setup() {
    const idError = ref(false);
    const passError = ref(false);
    const repassError = ref(false);
    const emailError = ref(false);
    const secuError = ref(false);
    let info = reactive({
      id: "",
      pass: "",
      repass: "",
      email: "",
      certify: "",
    });

    const onSubmitForm = () => {
      if (info.id === "") {
        idError.value = true;
        info.id.focus();
      } else if (info.pass === "") {
        passError.value = true;
        info.pass.focus();
      } else if (info.repass === "") {
        repassError.value = true;
        info.repass.focus();
      } else if (info.pass !== info.repass) {
        repassError.value = true;
        info.pass.focus();
      } else if (info.email === "") {
        emailError.value = true;
        info.email.focus();
      } else if (info.certify === "") {
        secuError.value = true;
        info.certify.focus();
      }
      idError.value = false;
      passError.value = false;
      repassError.value = false;
      emailError.value = false;
      secuError.value = false;
    };
    return {
      info,
      onSubmitForm,
      idError,
      passError,
      repassError,
      emailError,
      secuError,
    };
  },
};
</script>

<style lang="sass" scoped>
.q-pa-md
    max-width: 400px
.font14
  font-size: 14px
  color: red
.purple-color
  color: #AE6FFF
  &:hover
    color: #AE6FFF
    font-weight: 500
</style>
