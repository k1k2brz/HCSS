<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">마이페이지</span>
    </div>
  </div>
  <div class="d-flex justify-content-between" style="width: 100%">
    <!-- <EventCalendar /> -->
    <div class="d-flex">
      <MyCalender class="mr-3" />
      <TodoForm />
    </div>
  </div>
  <div class="d-flex flex-column gap-5">
    <div>
      <h3>활동기록</h3>
      <div class="position-relative">
        <div class="position-absolute"></div>
      </div>
    </div>
    <div>
      <h3>자주 사용하는 태그</h3>
      <div class="backgrondBox pt-3 pb-3 pr-4 pl-4">
        <div class="row">
          <div class="col-2">태그이름</div>
          <div class="col-3">태그 사용횟수</div>
          <div class="col-2">전체 인기도</div>
          <div class="col-2">컨텐츠</div>
          <div class="col-2">최근 사용일</div>
        </div>
        <div class="row">
          <div class="col-2">#인테리어 디자인</div>
          <div class="col-3">(그래프)180</div>
          <div class="col-2">96%</div>
          <div class="col-2">???</div>
          <div class="col-2">2022.09.13</div>
        </div>
      </div>
    </div>
    <div>
      <h3>내가 관심있는 태그</h3>
      <div class="purple-box p-4">
        <div class="ml-2 mr-2 d-flex justify-content-between">
          <div class="flex-wrap gap-2 d-flex">
            <div
              class="tag"
              v-for="(tag, index) in myFavTags"
              :key="'tag' + index"
            >
              <span class="btn-tag d-flex align-items-center">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="text-btn">태그 수정하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoForm from "@/pages/todos/IndexPage.vue";
import MyCalender from "@/components/MyCalender.vue";
import { reactive } from "@vue/reactivity";
// import EventCalendar from '@/components/EventCalendar.vue';

export default {
  setup() {
    const myFavTags = reactive([
      "#인테리어 디자인",
      "#독서",
      "#운동",
      "#시네마토그래피",
      "#연극",
      "#클래식",
      "#인테리어 디자인",
      "#독서",
      "#운동",
      "#시네마토그래피",
      "#연극",
      "#클래식",
      "#인테리어 디자인",
      "#독서",
      "#운동",
      "#시네마토그래피",
      "#연극",
      "#클래식",
    ]);
    return { myFavTags };
  },
  components: { TodoForm, MyCalender },
};
</script>

<style lang="sass" scoped>
.purple-box
  border-radius: 10px

button
  background: none
  border: none

.btn-tag
  padding: 5px 12px
  background-color: #AE6FFF
  border: none
  border-radius: 20px
  color: white
  font-weight: 400
  font-size: 15px
  white-space: nowrap
</style>
