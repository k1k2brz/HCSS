<template>
  <div class="card mb-4">
    <div class="card-body p-4">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ post.myWriteTitle }}</h5>
        <div class="d-flex flex-column">
          <button
            @click="reportContent"
            class="btn-icon bi bi-three-dots d-flex justify-content-end"
          ></button>
          <div>
            <div
              v-if="reportToggle"
              class="reportBtn-shadow report-location position-absolute"
            >
              <button
                @click="onRemoveBtn"
                type="button"
                class="reportBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                삭제하기
              </button>
              <button
                @click="onEditBtn"
                type="button"
                class="reportBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                수정하기
              </button>
              <ReportModal />
            </div>
          </div>
        </div>
      </div>
      <div class="small-text mb-4">
        <span class="days">2022.08.01</span>
        <span class="ml-1 lastTime margin5">22시간 전</span>
      </div>
      <img src="@/assets/mainimg2.jpg" class="card-img-top mb-4" alt="none" />
      <p class="card-text mb-4">{{ post.myWriteContent }}</p>
      <div class="mb-2 d-flex justify-content-between flex-column">
        <div class="mb-3 d-flex gap-1">
          <button type="button" class="btn-tag-sm d-flex">LifeStyle</button>
          <button type="button" class="btn-tag-sm d-flex">일상</button>
          <button type="button" class="btn-tag-sm d-flex">디지털 사진</button>
        </div>
        <div class="d-flex gap-3">
          <button @click="bookmarkBtn" class="btn-icon">
            <div
              v-if="bookmarkSave"
              class="bi bi-bookmark-fill icon-purple"
            ></div>
            <div v-else class="bi bi-bookmark"></div>
          </button>
          <button @click="bookmarkFav" class="btn-icon">
            <div v-if="bmFav" class="bi bi-heart"></div>
            <div v-else class="bi bi-heart-fill icon-red"></div>
          </button>
          <button class="btn-icon">
            <div class="bi bi-share-fill"></div>
          </button>
          <button @click="bookmarkCmt" class="btn-icon">
            <div v-if="bmCmt" class="bi bi-chat-dots-fill icon-purple"></div>
            <div v-else class="bi bi-chat-dots"></div>
          </button>
        </div>
        <div>
          <div
            v-if="bookmarkSave"
            class="d-flex container bmSave position-relative"
          >
            <div
              class="d-flex flex-column box-shadow position-absolute zindex p-3 gap-2"
              style="min-width: 250px"
            >
              <div class="d-flex justify-content-between">
                <div style="margin: auto; width: 100%">
                  <span class="bold">내 북마크에 저장</span>
                </div>
                <button @click="bookmarkPlus" class="text-btn-big">+</button>
              </div>
              <div class="stroke-default"></div>
              <div @click="bookmarkSaveBtn" class="mt-2 d-flex gap-3">
                <button class="d-flex gap-3 bookmarkBtn">
                  <div class="box"></div>
                  <span>bookmark1</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="bookmarkSaveCheck"
          class="container bm-container d-flex position-absolute"
        >
          <div
            class="position-relative bookmarks flex-wrap bg-white d-flex box-shadow p-3"
          >
            <span class="ml-3 d-flex">북마크가 저장되었습니다.</span>
            <button @click="bookmarkChecking" class="text-btn pr-3">
              저장된 북마크 확인하기
            </button>
          </div>
        </div>
        <div v-if="bmCmt">
          <hr />
          <CommentWrite :post-id="post.id" />
          <div v-for="cmt in post.Comments" :key="cmt.id">
            <div class="Maincomment mb-1">
              <span>User</span>
              <span v-if="onComment">{{ cmt.content }}</span>
              <div v-else>
                <input
                  type="text"
                  v-model="commentValue"
                  @keyup.enter="changeCommentFinal"
                />
                <button @click="changeCommentFinal" class="btn-regular">
                  수정완료
                </button>
              </div>
              <div class="d-flex justify-content-end">
                <span>2022.08.28</span>
                <button
                  v-if="cmtChangeBtn"
                  @click="changeComment"
                  class="text-btn"
                >
                  수정
                </button>
                <button
                  @click="onRemoveComment"
                  class="ml-2 bi bi-x-lg"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import ReportModal from "@/pages/mainpage/ReportModal.vue";
import CommentWrite from "./CommentWrite.vue";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const reportToggle = ref(false);
    const bookmarkSave = ref(false);
    const bookmarkSaveCheck = ref(false);
    const bmFav = ref(true);
    const bmCmt = ref(false);
    const bmPlus = ref(false);
    const onComment = ref(true);
    const cmtChangeBtn = ref(true);

    const onRemoveBtn = () => {
      store.dispatch("posts/remove", {
        id: props.post.id,
      });
    };
    const onEditBtn = () => {};

    const reportContent = () => {
      if (reportToggle.value == false) {
        reportToggle.value = true;
        store.state.reportToggle = true;
      } else if (reportToggle.value == true) {
        reportToggle.value = false;
        store.state.reportToggle = false;
      }
    };

    const bookmarkBtn = () => {
      if (bookmarkSave.value == false) {
        bookmarkSave.value = true;
      } else if (bookmarkSave.value == true) {
        bookmarkSave.value = false;
      }
    };

    const bookmarkFav = () => {
      bmFav.value == true ? (bmFav.value = false) : (bmFav.value = true);
    };

    const bookmarkCmt = () => {
      bmCmt.value == true ? (bmCmt.value = false) : (bmCmt.value = true);
    };

    const bookmarkPlus = () => {
      bmPlus.value == false ? (bmPlus.value = true) : (bmPlus.value = false);
      console.log(bmPlus.value);
    };

    const bookmarkSaveBtn = () => {
      if (bookmarkSaveCheck.value == false) {
        bookmarkSaveCheck.value = true;
        bookmarkSave.value = false;
        setTimeout(() => {
          // 마우스가 올라가 있으면 사라지지 않게 이벤트 추가
          // Fade 애니메이션 줄 것
          bookmarkSaveCheck.value = false;
        }, 5000);
      } else if (bookmarkSaveCheck.value == true)
        bookmarkSaveCheck.value = false;
    };

    const bookmarkChecking = () => {
      router.push({
        name: "BookMark",
      });
    };

    const changeComment = () => {
      if (onComment.value == true) {
        onComment.value = false;
        cmtChangeBtn.value = false;
      }
    };

    const onRemoveComment = () => {
      store.dispatch("posts/removeComment", {
        id: props.post.id,
      });
    };

    const changeCommentFinal = () => {
      store.dispatch("posts/changeComment", {
        content: props.post.content,
      });
    };

    return {
      reportToggle,
      reportContent,
      bookmarkSave,
      bookmarkSaveCheck,
      bmFav,
      bmCmt,
      bookmarkBtn,
      bookmarkFav,
      bookmarkCmt,
      bookmarkSaveBtn,
      bookmarkChecking,
      bookmarkPlus,
      onRemoveBtn,
      onEditBtn,
      onComment,
      changeComment,
      cmtChangeBtn,
      changeCommentFinal,
      onRemoveComment,
    };
  },
  components: { ReportModal, CommentWrite },
};
</script>

<style lang="sass" scoped>
.box
    width: 30px
    height: 30px
    border-radius: 5px
    background-color: #D8D8D8

.bookmarks
    font-size: 15px
    top: 80px
    right: 11px

.bm-container
    width: 500px

.bg-white
  background-color: white

.bmSave
  top: 10px

.zindex
  z-index: 10
  background-color: white

.icon-purple
  color: #AE6FFF

.icon-red
  color: #FF4040

.bookmarkBtn
  border: none
  background: none

.report-location
  right: 30px
  z-index: 10
  background-color: white

.text-btn-big
  padding: 0
  color: #AE6FFF
  background: none
  border: none
  font-weight: 500
  font-size: 14px
  font-size: 20px
  font-weight: 700
</style>
