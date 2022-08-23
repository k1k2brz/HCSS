<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">회원정보 수정</span>
    </div>
    <div>
      <div class="stroke-default"></div>
      <div class="edit-grid">
        <div class="purple-box d-flex justify-content-end">
          <div class="mt-3 mb-3 mr-3">이름</div>
        </div>
        <div class="bold mt-3 mb-3 ml-4">홍길동</div>
        <div class="btn-end d-flex justify-content-end">
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn-regular-round">회원탈퇴</button>
          </div>
        </div>
      </div>
    </div>
    <div class="stroke-default"></div>
    <div>
      <div class="edit-grid">
        <div class="stroke-top purple-box d-flex justify-content-end">
          <div class="mt-3 mb-3 mr-3">아이디</div>
        </div>
        <div class="bold mt-3 mb-3 ml-4">decommi22</div>
      </div>
    </div>
    <div class="stroke-default"></div>
    <div>
      <div class="edit-grid">
        <div class="purple-box d-flex justify-content-end">
          <div class="mt-3 mb-3 mr-3">이메일</div>
        </div>
        <div class="d-flex flex-column gap-3 ml-4 mb-3">
          <div class="bold mt-3">email@email.com</div>
          <div>
            <div class="orange-box">
              <span class="email-check ml-2">인증된 이메일 주소입니다.</span>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn-change">이메일 변경</button>
          </div>
        </div>
      </div>
    </div>
    <div class="stroke-default"></div>
    <div>
      <div class="edit-grid2">
        <div class="stroke-top purple-box d-flex justify-content-end">
          <div class="mt-3 mb-3 mr-3">비밀번호 변경</div>
        </div>
        <div class="d-flex flex-column gap-3 ml-4">
          <input
            class="mt-3 input-box form-control"
            type="password"
            placeholder="현재 비밀번호"
          />
          <input
            class="input-box form-control"
            type="password"
            placeholder="새 비밀번호"
          />
          <input
            class="input-box form-control"
            type="password"
            placeholder="새 비밀번호 확인"
          />
          <div>
            <span class="text-sm bold">비밀번호 변경시 유의사항</span>
            <ul class="text-sm">
              <li>8자 이상 영문/숫자/특수문자중 2가지 이상을 입력해주세요.</li>
              <li>ID와 같은 비밀번호는 사용할 수 없습니다.</li>
            </ul>
          </div>
          <div class="d-flex align-items-center mb-3">
            <button class="btn-change">비밀번호 변경</button>
          </div>
        </div>
      </div>
    </div>
    <div class="stroke-default"></div>
    <div class="edit-grid2">
      <div class="purple-box d-flex justify-content-end">
        <div class="mt-3 mb-3 mr-3">계정 연동 여부</div>
      </div>
      <div class="d-flex gap-3 ml-4 align-items-center">
        <div class="bi bi-bookmark-fill"></div>
        <div class="bi bi-heart"></div>
        <div class="bi bi-share-fill"></div>
        <div class="bi bi-chat-dots"></div>
      </div>
    </div>
    <div class="stroke-default"></div>
    <div>
      <div class="edit-grid2">
        <div class="stroke-top purple-box d-flex justify-content-end">
          <div class="mt-3 mb-3 mr-3">DeCommi소식 받기</div>
        </div>
        <div class="d-flex flex-column gap-3 ml-4 mb-3">
          <div class="mt-3">
            <input type="checkbox" />
            <span class="ml-2">이메일 구독</span>
            <span class="text-sm ml-2 text-grey">(거부일:2022.01.01)</span>
          </div>
          <div class="d-flex align-items-center">
            <button class="btn-change">수신 변경</button>
          </div>
        </div>
      </div>
    </div>
    <div class="stroke-default"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.stroke-default
    margin: 0 !important
.edit-grid
    display: grid
    grid-template-columns: repeat(5, 1fr)
.edit-grid2
    display: grid
    grid-template-columns: 20% 80%
.stroke-top
    border-top: 0.5px solid #D8D8D8
.btn-end
    grid-column: 5
    font-size: 16px
.orange-box
    background-color: #FFEEE2
.email-check
    font-size: 13px
.input-box
    border: 0.5px solid #D8D8D8
.text-sm
    font-size: 13px
    margin: 0
.text-grey
    color: #B4B4B4
</style>
