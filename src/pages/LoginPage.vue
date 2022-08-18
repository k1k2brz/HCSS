<template>
  <div class="container container_default d-flex justify-content-center align-items-center p-0 m-0">
    <div class="q-pa-md" style="max-width: 400px">
      <form ref="form" @submit.prevent="onSubmitForm()">
        <div class="mb-3">
          <input v-model="info.id" type="email" class="form-control" placeholder="Email을 입력해주세요." id="loginEmail"
            aria-describedby="emailHelp"/>
          <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
        </div>
        <div class="mb-3">
          <input v-model="info.pass" type="password" placeholder="비밀번호를 입력해주세요." class="form-control" id="loginPass" />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="loginCheck" />
          <label class="form-check-label me-5" for="loginCheck">아이디 저장</label>
          <input type="checkbox" class="form-check-input" id="loginCheck2" />
          <label class="form-check-label" for="loginCheck2">자동로그인</label>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <div class="LoginLine"></div>
          <span class="ml-3 mr-3">또는</span>
          <div class="LoginLine"></div>
        </div>
        <button type="submit" class="btn btn-primary">로그인</button>
      </form>
      <!-- 사용자가 로그인 하면 여기가 보인다 -->
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

export default {
  name: "LoginPage",
  setup() {
    let info = reactive({
      id: "",
      pass: "",
    });
    // const loginEmail = reactive({});
    // const loginPass = reactive({});

    function onSubmitForm() {
      if (info.id === "") {
        alert("ID를 확인해주세요");
        info.id.focus();
      } else if (info.pass === "") {
        alert("패스워드를 확인해주세요");
        info.pass.focus();
      }
    }

    return { info, onSubmitForm };
  },
};
</script>

<style lang="sass" scoped>
.LoginLine
    height: 1px
    width: 160px
    background-color: grey
</style>
