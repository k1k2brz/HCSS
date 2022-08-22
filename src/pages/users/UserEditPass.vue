<template>
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md" style="max-width: 400px">
      <div class="backgrondBox p-5">
        <form>
          <div class="d-flex justify-content-center">
            <h1 class="home-title mb-4">회원정보 수정</h1>
          </div>
          <div class="mb-3">
            <div class="font14 mb-1 ml-2">
              보안을 위해 비밀번호를 한 번 더 입력해주세요.
            </div>
            <div>
              <input
                v-model="info.pass"
                type="password"
                class="form-control"
                placeholder="비밀번호를 입력해주세요."
              />
              <router-link class="nav-link mr-3" :to="{ name: 'UserEditPass' }"
                >확인</router-link
              >
            </div>
            <div class="font14 mt-1 ml-2" v-show="passError">
              비밀번호를 입력해주세요.
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
