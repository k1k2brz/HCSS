<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">내 북마크</span>
    </div>
    <div class="d-flex justify-content-between">
      <!-- <Modal /> -->
      <div class="d-flex justify-content-center align-items-center">
        <button class="new-folder" data-bs-toggle="modal" data-bs-target="#exampleModal">
          + 새 북마크 폴더
        </button>
        <div v-if="showModal" class="modal fade" id="exampleModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">새 북마크 추가</h5>
                <button @click="btnCancel" class="btn-close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">폴더명</label>
                    <input @keyup.enter="addBookmark" v-model="bookmarkValue" type="text" class="form-control"
                      id="recipient-name" />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  닫기
                </button>
                <button @click="addBookmark" type="button" class="btn btn-primary" data-bs-dismiss="modal">
                  북마크 추가
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center gap-1">
        <button class="file-sort">이름순</button>
        <div class="boundaryLine"></div>
        <button class="file-sort">최신순</button>
      </div>
    </div>
    <div v-if="bmExist" class="text-center">
      <div class="row row-cols-5 mt-3">
        <div class="col d-flex p-2 mb-4" v-for="(bmTag, index) in bmTags" :key="'bmTag' + index">
          <div class="folder-box">
            <div class="folder-stroke p-4 mb-3">
              <img src="@/assets/folder.png" alt="이미지 없음" />
            </div>
            <span class="bold">{{ bmTag }}</span>
            <button @click="onRemoveBookmark" class="bi bi-x-lg"></button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="w-100">
        <div class="d-flex flex-column justify-content-center align-items-center pd-container">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="w-20 d-flex justify-content-center align-items-center">
              <div class="bookmark-circle">
                <img src="@/assets/bookmarkAll.png" alt="No image" class="ml-1" />
              </div>
            </div>
            <span class="bm-title mt-2">아직 북마크 된 다이어리가 없습니다.</span>
            <span class="bm-title-sm mt-2">다시 보고 싶은 다이어리를 북마크 해보세요!</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
// import Modal from "@/pages/bookmark/BmModal.vue";

export default {
  components: {
    // Modal,
  },
  setup() {
    const bmExist = ref(false);
    const bookmarkValue = ref("");
    let bmTags = reactive([]);
    const showModal = ref(true);

    // 북마크에 들어왔을 때 북마크가 존재하면 화면 바뀜
    watch(() => {
      if (bmTags.length === 0) {
        bmExist.value = false;
      } else if (bmTags.length !== 0) {
        bmExist.value = true;
      }
    });

    const addBookmark = () => {
      if (!bookmarkValue.value == "") {
        bmTags.push(bookmarkValue.value);
        bookmarkValue.value = "";
      }
    };

    const btnCancel = () => {
      if (showModal.value == true) {
        showModal.value = false;
      }
      showModal.value = true;
    };

    const onRemoveBookmark = (index) => {
      bmTags.splice(index, 1);
    }

    return {
      bmExist,
      addBookmark,
      btnCancel,
      showModal,
      bookmarkValue,
      bmTags,
      onRemoveBookmark,
    };
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
