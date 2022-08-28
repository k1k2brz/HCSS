<template>
  <div
    class="container container_default d-flex justify-content-center align-items-center p-0 m-0"
  >
    <div class="q-pa-md">
      <div @click="tagSelectBtn" class="backgrondBox">
        <div>
          <div class="d-flex justify-content-center">
            <h1 class="home-title mb-4">
              <span class="home-title purple-color">관심있는 태그</span>를 선택
              해주세요(최소 3개 이상)
            </h1>
          </div>
          <div class="container text-center">
            <div class="row gap-2">
              <button v-if="clickTag" class="col">
                <span>음악</span>
              </button>
              <button v-else class="col">
                <i class="bi bi-check-lg"></i>
                <span>음악</span>
              </button>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>
          <div class="container text-center mt-2">
            <div class="row gap-2">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt-4">
          <div class="btn btn-primary">
            <span>1{{ message }}개의 태그가 선택됨</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const clickTag = ref(true);
    // 배열 만들고 대응하는 데이터 하나씩 넣고 빼고 하는식으로 개수 체크해서 x개선택 뜨게 할 것
    const tagSelectBtn = () => {
      if (clickTag.value == true) {
        clickTag.value = false;
      } else if (clickTag.value == false) {
        clickTag.value = true;
      }
    };
    return { tagSelectBtn, clickTag };
  },
};
</script>

<style lang="sass" scoped>
.backgrondBox
  background-color: #EEF6FF
  border: none
  padding: 60px 90px

.col
    border: none
    background-color: lightgrey
    height: 120px
    border-radius: 15px
    font-size: 22px
</style>
