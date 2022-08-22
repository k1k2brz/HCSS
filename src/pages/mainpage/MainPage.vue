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
              <textarea
                class="form-control"
                placeholder="오늘의 다이어리를 작성해 보세요!"
                id="floatingTextarea"
              />
              <div>
                <div class="LoginLine mb-2"></div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex gap-1">
                  <div class="icon"></div>
                  <div class="icon"></div>
                  <div class="icon"></div>
                  <div class="icon"></div>
                </div>
                <button class="btn-regular">작성완료</button>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-4">
          <div class="card-body p-4">
            <h5 class="card-title">안녕하세요</h5>
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
        <div class="card mb-4">
          <div class="card-body p-4">
            <h5 class="card-title">안녕하세요</h5>
            <div class="small-text mb-4">
              <span class="days">2022.08.01</span>
              <span class="lastTime">22시간 전</span>
            </div>
            <img
              src="@/assets/mainimg2.jpg"
              class="card-img-top mb-4"
              alt="none"
            />
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
            <div
              class="p-3 d-flex height100 justify-content-between flex-column"
            >
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
              <div
                class="input-group mb-3 mt-3 d-flex justify-content-center align-items-center"
              >
                <div
                  class="d-flex justify-content-center align-items-center w-95"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="태그 검색"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
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

<script></script>

<style lang="sass" scoped>
.margin5
  margin-left: 5px

.btnTag
    background-color: #E8E8E8
    border-radius: 20px

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
</style>
