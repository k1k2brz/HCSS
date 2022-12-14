<template>
  <section
    class="w-70 purple-box section d-flex justify-content-center align-items-center pl-5 pr-5"
  >
    <div class="calendar">
      <div class="container d-flex flex-column">
        <h2 class="subtitle d-flex justify-content-center mb-3">
          <button
            class="button bi bi-caret-left-fill mr-4"
            @click="calendarData(-1)"
          ></button>
          {{ year }}년 {{ month }}월
          <button
            class="button bi bi-caret-right-fill ml-4"
            @click="calendarData(1)"
          ></button>
        </h2>
        <table class="table">
          <thead>
            <th v-for="day in days" :key="day">{{ day }}</th>
          </thead>
          <tbody>
            <tr v-for="(date, idx) in dates" :key="idx">
              <td
                @click="calendarDay"
                v-for="(day, secondIdx) in date"
                :key="secondIdx"
                :class="{
                  textToday:
                    day === today &&
                    month === currentMonth &&
                    year === currentYear,
                  textPrevious: idx === 0 && day >= lastMonthStart,
                  textNext: dates.length - 1 === idx && nextMonthStart > day,
                }"
              >
                <button
                  style="width: 100%"
                  :class="{
                    textToday:
                      day === today &&
                      month === currentMonth &&
                      year === currentYear,
                    textBlue: secondIdx === 6,
                    textRed: secondIdx === 0,
                  }"
                >
                  {{ day }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const days = reactive(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

    const dates = ref([]);
    const date = new Date();
    const currentYear = ref(date.getFullYear());
    const currentMonth = ref(date.getMonth() + 1);
    const year = ref(currentYear.value);
    const month = ref(currentMonth.value);
    const lastMonthStart = ref(0);
    const nextMonthStart = ref(0);
    const today = ref(date.getDate());

    const clickDay = reactive([]);

    const getFirstDayLastDate = (year, month) => {
      const firstDay = new Date(year, month - 1, 1).getDay(); // 이번 달 시작 요일
      const lastDate = new Date(year, month, 0).getDate(); // 이번 달 마지막 날짜
      let lastYear = year;
      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        lastYear -= 1;
      }
      const prevLastDate = new Date(lastYear, lastMonth, 0).getDate(); // 지난 달 마지막 날짜
      return [firstDay, lastDate, prevLastDate];
    };

    const getMonthOfDays = (
      monthFirstDay,
      monthLastDate,
      prevMonthLastDate
    ) => {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      const dates = [];
      let weekOfDays = [];
      while (day <= monthLastDate) {
        if (day === 1) {
          // 1일이 어느 요일인지에 따라 테이블에 그리기 위한 지난 셀의 날짜들을 구할 필요가 있다.
          for (let j = 0; j < monthFirstDay; j += 1) {
            if (j === 0) lastMonthStart.value = prevDay; // 지난 달에서 제일 작은 날짜
            weekOfDays.push(prevDay);
            prevDay += 1;
          }
        }
        weekOfDays.push(day);
        if (weekOfDays.length === 7) {
          // 일주일 채우면
          dates.push(weekOfDays);
          weekOfDays = []; // 초기화
        }
        day += 1;
      }
      const len = weekOfDays.length;
      if (len > 0 && len < 7) {
        for (let k = 1; k <= 7 - len; k += 1) {
          weekOfDays.push(k);
        }
      }
      if (weekOfDays.length > 0) dates.push(weekOfDays); // 남은 날짜 추가
      nextMonthStart.value = weekOfDays[0]; // 이번 달 마지막 주에서 제일 작은 날짜
      return dates;
    };

    const calendarData = (arg) => {
      // 인자를 추가
      if (arg < 0) {
        // -1이 들어오면 지난 달 달력으로 이동
        month.value -= 1;
      } else if (arg === 1) {
        // 1이 들어오면 다음 달 달력으로 이동
        month.value += 1;
      }
      if (month.value === 0) {
        // 작년 12월
        year.value -= 1;
        month.value = 12;
      } else if (month.value > 12) {
        // 내년 1월
        year.value += 1;
        month.value = 1;
      }

      const [monthFirstDay, monthLastDate, lastMonthLastDate] =
        getFirstDayLastDate(year.value, month.value);
      // dates =
      dates.value = getMonthOfDays(
        monthFirstDay,
        monthLastDate,
        lastMonthLastDate
      );
    };

    onMounted(() => {
      calendarData();
    });

    const calendarDay = (e) => {
      console.log(e.target.innerHTML);
      // 달력 날짜를 받는다.
      // 이 날 작성된 다이어리를 받아올 수 있도록
    };

    return {
      days,
      dates,
      currentYear,
      currentMonth,
      today,
      year,
      month,
      calendarData,
      lastMonthStart,
      nextMonthStart,
      getFirstDayLastDate,
      getMonthOfDays,
      calendarDay,
      clickDay,
    };
  },
};
</script>

<style lang="sass" scoped>
td,
th
  border: none

.calendar
  padding-top: 70px
  padding-bottom: 70px

button
  background: none
  border: none

.bi
  font-size: 20px
  color: pink

.purple-box
  border-radius: 10px

.textPrevious
  opacity: 40%

.textNext
  opacity: 40%

.textToday
  font-weight: 500
  color: white !important
  background-color: #AE6FFF

.textBlue
  color: #346BF9

.textRed
  color: #FF4040

.sunday
  background: red

.subtitle
  font-size: 20px
  font-weight: 700
</style>
