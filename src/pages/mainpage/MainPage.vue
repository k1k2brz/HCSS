<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">홈</span>
    </div>
    <!-- <div> -->
    <!-- <span>날짜순</span>
            <div class="boundaryLine"></div>
            <span>북마크순</span>
            <div class="boundaryLine"></div>
            <span>하트순</span> -->
    <!-- </div> -->
    <div class="half d-flex justify-content-between">
      <div class="card-line w-70">
        <div class="card mb-4">
          <div class="form-floating">
            <div class="card-body">
              <!-- 1회만 클릭하고 다시 여기로 안돌아오면 해결 -->
              <div>
                <input v-if="clickTA" v-model="myWriteTitle" type="text" class="myWriteTitle none form-control"
                  placeholder="제목을 입력하세요." />
                <textarea v-model="myWriteContent" @click="clickTextarea" class="myWriteContent form-control"
                  placeholder="오늘의 다이어리를 작성해 보세요!" id="floatingTextarea" />
                <button v-if="clickTA" @click="publicPrivacy" class="purple-color mb-3">
                  모든 사람이 다이어리를 읽을 수 있습니다.
                </button>
                <div v-if="pp" class="d-flex position-absolute">
                  <div class="bg-white d-flex flex-column box-shadow p-4 position-relative gap-1">
                    <div>
                      <button @click="diaryPP" class="privacy-public">
                        내 다이어리 공개
                      </button>
                      <i v-if="diaryPrivacyCheck" class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <button :disabled="commentDisable" @click="commentPP" class="privacy-public">
                        내 다이어리에 댓글 허용
                      </button>
                      <i v-if="commentPrivacyCheck" class="bi bi-check-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="LoginLine mb-3"></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-1">
                  <div class="icon"></div>
                  <div class="icon"></div>
                  <div class="icon"></div>
                  <div class="icon"></div>
                </div>
                <button @click="writeCompletedBtn" :disabled="myWriteTitle.length < 1 || myWriteContent.length < 1"
                  class="btn-regular">
                  작성완료
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between">
              <h5 class="card-title">안녕하세요</h5>
              <div class="d-flex flex-column">
                <button @click="reportContent" class="btn-icon bi bi-three-dots d-flex justify-content-end"></button>
                <div>
                  <div v-if="reportToggle" class="reportBtn-shadow report-location position-absolute">
                    <button class="reportBtn">
                      <span class="reportBtn-text">신고하기</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="small-text mb-4">
              <span class="days">2022.08.01</span>
              <span class="lastTime margin5">22시간 전</span>
            </div>
            <p class="card-text mb-4">대충 감성적인 글</p>
            <div class="mb-2 d-flex justify-content-between flex-column">
              <div class="mb-3 d-flex gap-1">
                <button type="button" class="btn-tag-sm d-flex">
                  LifeStyle
                </button>
                <button type="button" class="btn-tag-sm d-flex">일상</button>
                <button type="button" class="btn-tag-sm d-flex">
                  디지털 사진
                </button>
              </div>
              <div class="d-flex gap-3">
                <button @click="bookmarkBtn" class="btn-icon">
                  <div v-if="bookmarkSave" class="bi bi-bookmark-fill icon-purple"></div>
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
                <div v-if="bookmarkSave" class="d-flex container position-absolute">
                  <div class="d-flex flex-column box-shadow zindex p-3 gap-2" style="min-width: 250px">
                    <div class="d-flex justify-content-between">
                      <div style="margin: auto; width: 100%">
                        <span class="bold">내 북마크에 저장</span>
                      </div>
                      <button @click="bookmarkPlus" class="text-btn-big">
                        +
                      </button>
                    </div>
                    <div class="stroke-default"></div>
                    <div class="mt-2 d-flex gap-3">
                      <button @click="bookmarkSaveBtn" class="d-flex gap-3 bookmarkBtn">
                        <div class="box"></div>
                        <span>bookmark1</span>
                      </button>
                    </div>
                    <div class="mt-1 d-flex gap-3">
                      <div class="box"></div>
                      <span>bookmark2</span>
                    </div>
                    <div class="mt-1 d-flex gap-3">
                      <div class="box"></div>
                      <span>bookmark3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container bm-container d-flex justify-content-center">
                <div class="position-absolute bookmarks d-flex box-shadow p-3">
                  <span class="pl-3 d-flex">북마크가 저장되었습니다.</span>
                  <button class="text-btn pr-3">저장된 북마크 확인하기</button>
                </div>
              </div>
              <div v-if="bmCmt">
                <hr />
                <div>
                  <div class="mb-3 d-flex justify-content-center gap-2">
                    <input type="text" class="comment serviceSearch w-100" placeholder="댓글을 입력해주세요." />
                    <button class="btn-regular">댓글입력</button>
                  </div>
                </div>
                <div>
                  <div class="Maincomment mb-1">
                    <span>User1</span>
                    <span>Dummy Comments</span>
                    <div class="d-flex justify-content-end">
                      <span>2022.08.28</span>
                    </div>
                  </div>
                  <div class="Maincomment">
                    <span>User1</span>
                    <span>Dummy Comments</span>
                    <div class="d-flex justify-content-end">
                      <span>2022.08.28</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body p-4">
            <h5 class="card-title">안녕하세요</h5>
            <div class="small-text mb-4">
              <span class="days">2022.08.01</span>
              <span class="lastTime">22시간 전</span>
            </div>
            <img src="@/assets/mainimg2.jpg" class="card-img-top mb-4" alt="none" />
            <p class="card-text mb-4">대충 감성적인 글</p>
            <div class="mb-2 d-flex justify-content-between flex-column">
              <div class="mb-3 d-flex gap-1">
                <button type="button" class="btn-tag-sm d-flex">
                  LifeStyle
                </button>
                <button type="button" class="btn-tag-sm d-flex">일상</button>
                <button type="button" class="btn-tag-sm d-flex">
                  디지털 사진
                </button>
              </div>
              <div class="d-flex gap-3">
                <button class="btn-icon">
                  <div class="bi bi-bookmark-fill"></div>
                </button>
                <button class="btn-icon">
                  <div class="bi bi-heart"></div>
                </button>
                <button class="btn-icon">
                  <div class="bi bi-share-fill"></div>
                </button>
                <button class="btn-icon">
                  <div class="bi bi-chat-dots"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-30 search-tag-line d-flex justify-content-between ml-3">
        <div class="d-flex flex-column w-100">
          <div class="tagBox d-flex flex-column">
            <div class="mt-4 mb-1 d-flex justify-content-center">
              <p class="filterTitle">검색어 필터</p>
            </div>
            <div class="p-3 d-flex height100 justify-content-between flex-column">
              <div class="ml-2 mr-2 d-flex justify-content-between">
                <div class="gap-2 d-flex justify-content-between">
                  <button type="button" class="btn-tag-sm d-flex">
                    <span class="iconX">X</span>
                    공부
                  </button>
                  <button type="button" class="btn-tag-sm d-flex">
                    <span class="iconX">X</span>
                    일상
                  </button>
                  <button type="button" class="btn-tag-sm d-flex">
                    <span class="iconX">X</span>
                    운동
                  </button>
                </div>
              </div>
              <div class="input-group mb-3 mt-3 d-flex justify-content-center align-items-center">
                <div class="d-flex justify-content-center align-items-center w-95">
                  <input type="text" class="form-control" placeholder="태그 검색" aria-label="Recipient's username"
                    aria-describedby="button-addon2" />
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="tagBox mt-3 d-flex flex-column">
            <div class="mt-4 mb-1 d-flex justify-content-center">
              <p class="filterTitle">나의 추천태그</p>
            </div>
            <div class="ml-2 mr-2 p-3 d-flex justify-content-between">
              <div class="gap-2 d-flex justify-content-between">
                <button type="button" class="btn-tag-sm d-flex">영화</button>
                <button type="button" class="btn-tag-sm d-flex">음악</button>
                <button type="button" class="btn-tag-sm d-flex">축구</button>
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
import router from "@/router";
// import BookmarkModal from "@/pages/mainpage/MainbookmarkModal.vue";

export default {
  // components: {
  //   BookmarkModal,
  // },

  setup() {
    const pp = ref(false);
    const diaryPrivacyCheck = ref(true);
    const commentPrivacyCheck = ref(true);
    const commentDisable = ref(false);
    const bookmarkSave = ref(false);
    const bookmarkSaveCheck = ref(false);
    const bmFav = ref(true);
    const bmCmt = ref(false);
    const bmPlus = ref(false);
    const WCDisabled = ref(true);
    const myWriteTitle = ref("");
    const myWriteContent = ref("");
    const clickTA = ref(false);
    const reportToggle = ref(false);

    const publicPrivacy = () => {
      if (pp.value == false) {
        pp.value = true;
      } else if (pp.value == true) {
        pp.value = false;
      }
    };

    const diaryPP = () => {
      if (diaryPrivacyCheck.value == false) {
        diaryPrivacyCheck.value = true;
        commentDisable.value = false;
        commentPrivacyCheck.value = true;
      } else if (diaryPrivacyCheck.value == true) {
        diaryPrivacyCheck.value = false;
        commentDisable.value = true;
        commentPrivacyCheck.value = false;
      }
    };

    const commentPP = () => {
      if (commentPrivacyCheck.value == true) {
        commentPrivacyCheck.value = false;
      } else if (commentPrivacyCheck.value == false) {
        commentPrivacyCheck.value = true;
      }
    };

    const clickTextarea = () => {
      clickTA.value = true
    }

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

    const writeCompletedBtn = () => {
      if (myWriteTitle.value.length < 1) {
        WCDisabled.value = true;
        console.log(WCDisabled.value)
      } else if (myWriteTitle.value.length >= 1) {
        WCDisabled.value = false;
      }
      router.push("/pages/diarywrite");
    };

    const bookmarkSaveBtn = () => {
      if (bookmarkSaveCheck.value == false) {
        bookmarkSaveCheck.value = true
        bookmarkSave.value = false
        // setTimeout 써서 사라지게
      } else if (bookmarkSaveCheck.value == true)
        bookmarkSaveCheck.value = false
    }

    const reportContent = () => {
      reportToggle.value == false ? reportToggle.value = true : reportToggle.value = false
    }

    return {
      pp,
      publicPrivacy,
      diaryPrivacyCheck,
      commentPrivacyCheck,
      diaryPP,
      commentDisable,
      commentPP,
      bookmarkSave,
      bookmarkBtn,
      bookmarkSaveCheck,
      bmFav,
      bookmarkFav,
      bmCmt,
      bookmarkCmt,
      bookmarkPlus,
      bmPlus,
      writeCompletedBtn,
      WCDisabled,
      myWriteTitle,
      myWriteContent,
      clickTextarea,
      clickTA,
      bookmarkSaveBtn,
      reportToggle,
      reportContent
    };
  },
};
</script>

<style lang="sass" scoped>
a
  text-decoration: none
  cursor: pointer

.margin5
  margin-left: 5px

.card
  padding: 20px 15px

.text-btn-big
  padding: 0
  color: #AE6FFF
  background: none
  border: none
  font-weight: 500
  font-size: 14px
  font-size: 20px
  font-weight: 700

.btnTag
    background-color: #E8E8E8
    border-radius: 20px

.privacy-public
  padding: 0
  background: none
  border: none

.tagBox
  border-radius: 5px
  min-height: 400px

.form-control
  border: none
  resize: none
  &:focus
    box-shadow: none

.height100
  height: 100%

.homeDiary
    width: 100%

.icon
    width: 20px
    height: 20px
    border-radius: 50%
    background-color: lightgrey

.tagSearch
    background-color: white

.none
  border: none

.purple-color
  padding: 0.375rem 0.75rem
  font-size: 15px
  font-weight: 500
  border: none
  background: none

.box
  width: 30px
  height: 30px
  border-radius: 5px
  background-color: #D8D8D8

.bookmarks
  font-size: 15px
  bottom: -15px

.bm-container
  width: 500px

.bg-white
  background-color: white

.position-relative
  left: 25%
  bottom: 10px

.zindex
  z-index: 10
  background-color: white

.icon-purple
  color: #AE6FFF

.icon-red
  color: #FF4040

.comment
  border-radius: 10px
  border: 0.5px solid grey

.Maincomment
  display: grid
  grid-template-columns: 1fr 5fr 1fr

.bookmarkBtn
  border: none
  background: none

.report-location
  right: 30px
  z-index: 10
  
</style>
