<template>
  <div class="top-margin">
    <div class="mb-4">
      <span class="home-title">마이페이지</span>
    </div>
  </div>
  <div class="d-flex">
    <!-- <EventCalendar /> -->
    <TodoForm />
  </div>
</template>

<script>
import TodoForm from '@/pages/todos/IndexPage.vue'
// import EventCalendar from '@/components/EventCalendar.vue';
  
export default {
    components: { TodoForm }
}
</script>

<style lang="sass" scoped>
</style>
