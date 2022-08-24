<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">내 북마크</span>
    </div>
    <div class="d-flex justify-content-between">
      <Modal />
      <div class="d-flex align-items-center gap-1">
        <button class="file-sort">이름순</button>
        <div class="boundaryLine"></div>
        <button class="file-sort">최신순</button>
      </div>
    </div>
    <div v-if="openBtn" class="text-center">
      <div class="row row-cols-5 mt-3">
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
        <div class="col d-flex flex-column p-2 mb-4">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="" />
            </div>
            <span class="bold">내 폴더</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="w-100">
        <div
          class="d-flex flex-column justify-content-center align-items-center pd-container"
        >
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="w-20 d-flex justify-content-center align-items-center">
              <div class="bookmark-circle">
                <img
                  src="@/assets/bookmarkAll.png"
                  alt="No image"
                  class="ml-1"
                />
              </div>
            </div>
            <span class="bm-title mt-2"
              >아직 북마크 된 다이어리가 없습니다.</span
            >
            <span class="bm-title-sm mt-2"
              >다시 보고 싶은 다이어리를 북마크 해보세요!</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <button @click="onBtn">Click Click</button>
</template>

<script>
import { ref } from "vue";
import Modal from "@/pages/bookmark/BmModal.vue";

export default {
  components: {
    Modal,
  },
  setup() {
    const openBtn = ref(false);

    const onBtn = () => {
      if (openBtn.value == true) {
        openBtn.value = false;
      } else {
        openBtn.value = true;
      }
    };

    return { onBtn, openBtn };
  },
};
</script>

<style lang="sass" scoped>
.boundaryLine
    width: 1.5px
    height: 15px
    background: grey

.folder-stroke
    // border-bottom: 0.5px solid grey
    // box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px
    border-radius: 15px

img
    width: 100%

.bookmark-circle
    width: 100%
    height: 100%
    border-radius: 50%
    background-color: #F8F8F8
    padding: 20%

.pd-container
    padding: 15% 0

.bm-title
    font-size: 36px
    font-weight: 700

.bm-title-sm
    font-size: 18px
    color: #B4B4B4
</style>
