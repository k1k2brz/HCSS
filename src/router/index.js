import { createRouter, createWebHistory } from "vue-router";
// 뒤에 todos붙여주면 Todos파일로 가게
import Home from "../pages/IndexPage.vue";
import Todos from "../pages/todos/IndexPage.vue";
import Todo from "../pages/todos/IndexId.vue";
import TodoCreate from "../pages/todos/create/IndexPage.vue";
import Login from "../pages/LoginPage.vue";
import Signup from "../pages/SignUp.vue";
import Mainpage from "../pages/mainpage/MainPage.vue";
import Alarmmain from "../pages/alarm/AlarmMain.vue";
import Useredit from "../pages/users/UserEdit.vue";
import Usereditpass from "../pages/users/UserEditPass.vue";
import Mypage from "../pages/mypage/MyPage.vue";
import Bookmark from "../pages/bookmark/BookMark.vue";
import Diarywrite from "../pages/bookmark/DiaryWrite.vue";
// import home과 todos를 아래 컴포넌트에 넣어준다.

const router = createRouter({
  history: createWebHistory(),
  // 하나의 객체가 하나의 route를 의미
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    // 뒤에 todos붙여주면 Todos파일로 가게 Path설정
    {
      path: "/pages/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/pages/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/todos",
      name: "Todos",
      component: Todos,
    },
    // create부터 선언하고 밑에 :id가 나오는게 좋음(아니면 먼저 id를 받아버리기 때문에)
    {
      path: "/todos/create",
      name: "TodoCreate",
      component: TodoCreate,
    },
    // 콜론 넣고 주소 넣어야 여러개 값을 받는다
    {
      path: "/todos/:id",
      name: "Todo",
      component: Todo,
    },
    {
      path: "/pages/mainpage",
      name: "Main",
      component: Mainpage,
    },
    {
      path: "/pages/alarm",
      name: "Alarm",
      component: Alarmmain,
    },
    {
      path: "/pages/users",
      name: "UserEdit",
      component: Useredit,
    },
    {
      path: "/pages/users",
      name: "UserEditPass",
      component: Usereditpass,
    },
    {
      path: "/pages/mypage",
      name: "MyPage",
      component: Mypage,
    },
    {
      path: "/pages/diarywrite",
      name: "DiaryWrite",
      component: Diarywrite,
    },
    {
      path: "/pages/BookMark",
      name: "BookMark",
      component: Bookmark,
    },
  ],
});

// 1 /home 2 /todos 3 /todos/create 4 /todos/:id

export default router;
