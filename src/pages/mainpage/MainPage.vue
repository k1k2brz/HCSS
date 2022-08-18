<template>
  <div class="top-margin">
    <div class="mainHome">
      <p>홈</p>
    </div>
    <!-- <div> -->
    <!-- <span>날짜순</span>
            <div class="boundaryLine"></div>
            <span>북마크순</span>
            <div class="boundaryLine"></div>
            <span>하트순</span> -->
    <!-- </div> -->
    <div class="d-flex justify-content-between">
      <div class="homeDiary">
        <div class="homeDiary">
          <div class="containerBox">
            <div>
              <p>오늘의 다이어리를 작성해 보세요!</p>
            </div>
            <div>
              <div class="LoginLine"></div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
                <div class="icon"></div>
              </div>
              <button>작성완료</button>
            </div>
          </div>
        </div>
        <div>
          <div class="containerBox">
            <div>
              <p>안녕하세요</p>
              <div>
                <span>2022.08.01</span>
                <span>22시간 전</span>
              </div>
              <div>
                <span>대충 감성적인 글(본문 내용)</span>
              </div>
            </div>
            <div class="d-flex">
              <div
                class="btnTag d-flex justify-content-center align-items-center"
              >
                <span>lifestyle</span>
              </div>
              <div
                class="btnTag d-flex justify-content-center align-items-center"
              >
                <span>운동</span>
              </div>
              <div
                class="btnTag d-flex justify-content-center align-items-center"
              >
                <span>일상</span>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="d-flex">
                <div class="icon">북마크</div>
                <div class="icon">하트</div>
                <div class="icon">댓글</div>
                <div class="icon">공유</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div>
          <div class="tagBox d-flex justify-content-between flex-column">
            <div>
              <p>검색어 필터</p>
            </div>
            <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-between">
                <div
                  class="btnTag d-flex justify-content-center align-items-center"
                >
                  <span class="iconX">X</span>
                  <p>공부</p>
                </div>
                <div
                  class="btnTag d-flex justify-content-center align-items-center"
                >
                  <span class="iconX">X</span>
                  <p>페스티벌</p>
                </div>
                <div
                  class="btnTag d-flex justify-content-center align-items-center"
                >
                  <span class="iconX">X</span>
                  <p>운동</p>
                </div>
              </div>
            </div>
            <div class="tagSearch">
              <p>관심있는 태그 검색</p>
              <div class="iconPlus">+</div>
            </div>
          </div>
        </div>
        <div class="d-flex mt-5">
          <div>
            <div class="tagBox d-flex justify-content-between flex-column">
              <div>
                <p>내가 관심있는 태그(와 유사한 태그)</p>
              </div>
              <div class="d-flex">
                <div class="d-flex justify-content-between">
                  <span class="iconX">X</span>
                  <p>공부</p>
                  <span class="iconX">X</span>
                  <p>페스티벌</p>
                  <span class="iconX">X</span>
                  <p>페스티벌</p>
                </div>
              </div>
              <div class="tagSearch">
                <p>관심있는 태그 검색</p>
                <div class="iconPlus">+</div>
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
.btnTag
    background-color: #E8E8E8
    border-radius: 20px


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
