<template>
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md">
      <form ref="form" @submit.prevent="onSubmitForm">
        <div class="d-flex justify-content-center">
          <h1>DeCommi</h1>
        </div>
        <div class="mb-3">
          <input
            type="email"
            v-model="info.id"
            class="form-control"
            placeholder="아이디를 입력해주세요."
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="info.pass"
            class="form-control"
            placeholder="비밀번호를 입력해주세요."
          />
          <div id="password" class="form-text">
            비밀번호는 영어, 숫자, 특수문자를 두가지 이상 입력해주세요.
          </div>
        </div>
        <div class="mb-3">
          <input
            type="password"
            v-model="info.repass"
            class="form-control"
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            v-model="info.email"
            class="form-control"
            placeholder="이메일을 입력해주세요."
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
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
          <div id="emailHelp" class="form-text">
            10분 이내 메일이 도착하지 않으면 다시 시도해주세요.
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";

export default {
  name: "SignUp",
  setup() {
    let info = reactive({
      id: "",
      pass: "",
      repass: "",
      email: "",
      certify: "",
    });

    const onSubmitForm = () => {
      if (info.id === "") {
        alert("ID를 확인해주세요");
        info.id.focus();
      } else if (info.pass === "") {
        alert("비밀번호를 확인해주세요");
        info.pass.focus();
      } else if (info.repass === "") {
        alert("비밀번호를 확인해주세요");
        info.repass.focus();
      } else if (info.pass !== info.repass) {
        alert("비밀번호가 일치하지 않습니다.");
        info.pass.focus();
      } else if (info.email === "") {
        alert("이메일을 입력해주세요.");
        info.email.focus();
      } else if (info.certify === "") {
        alert("인증번호가 올바르지 않습니다.");
        info.certify.focus();
      }
    };
    return {
      info,
      onSubmitForm,
    };
  },
};
</script>

<style lang="sass" scoped>
.q-pa-md
    max-width: 400px
</style>
