<template>
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md" style="max-width: 400px">
      <div class="backgrondBox p-5">
        <form @submit.prevent>
          <div class="d-flex justify-content-center">
            <h1 class="home-title mb-4">회원정보 수정</h1>
          </div>
          <div class="mb-3">
            <div class="font14 mb-1 ml-2">
              보안을 위해 비밀번호를 한 번 더 입력해주세요.
            </div>
            <div>
              <input
                v-model="pass.pw"
                type="password"
                class="form-control"
                placeholder="비밀번호를 입력해주세요."
              />
              <span>
                <a @click.prevent="onBtn" class="btn btn-danger nav-link mr-3"
                  >확인</a
                >
              </span>
            </div>
            <div class="font14 mt-1 ml-2" v-if="pass.pwErr">
              비밀번호를 입력해주세요.
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { reactive } from 'vue';

export default {
  setup() {
    const pass = reactive({
        pw: "",
        pwErr: false
    })
    const onBtn = () => {
      if (pass.pw.trim().length == 0){
        console.log(pass.pw)
        pass.pwErr = true
        return
      }
      pass.pwErr = false
      router.push("/pages/users/edit")
    }

    
  return { onBtn, pass }
  }
};
</script>

<style lang="sass" scoped></style>
