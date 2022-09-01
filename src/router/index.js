import { createRouter, createWebHistory } from "vue-router";
// 뒤에 todos붙여주면 Todos파일로 가게
import Home from "../pages/IndexPage.vue";
import Todos from "../pages/todos/IndexPage.vue";
import Todo from "../pages/todos/IndexId.vue";
import TodoCreate from "../pages/todos/create/IndexPage.vue";
import Login from "../pages/LoginPage.vue";
import Signup from "../pages/SignUp.vue";
import Idfind from "../pages/IdFind.vue";
import Mainpage from "../pages/mainpage/MainPage.vue";
import Alarmmain from "../pages/alarm/AlarmMain.vue";
import Useredit from "../pages/users/UserEdit.vue";
import Usereditpass from "../pages/users/UserEditPass.vue";
import Mypage from "../pages/mypage/MyPage.vue";
import Bookmark from "../pages/bookmark/BookMark.vue";
import Diarywrite from "../pages/mainpage/DiaryWrite.vue";
import Servicewrite from "../pages/userserivce/ServiceWrite.vue";
import Servicenotice from "../pages/userserivce/ServiceNotice.vue";
import Servicefaq from "../pages/userserivce/ServiceFaq.vue";
import Servicequestion from "../pages/userserivce/ServiceQuestion.vue";
import Populartag from "../pages/findtag/PopularTag.vue";
import Recommendtag from "../pages/findtag/RecommendTag.vue";
import Selectgoodtag from "../pages/SelectGoodtag.vue";
import Managerpage from "../pages/managerpage/ManagerPage.vue";

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
      path: "/pages/idfind",
      name: "IdFind",
      component: Idfind,
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
      path: "/pages/users/edit",
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
    {
      path: "/pages/Service/qdwrite",
      name: "ServiceWrite",
      component: Servicewrite,
    },
    {
      path: "/pages/Service/notice",
      name: "ServiceNotice",
      component: Servicenotice,
    },
    {
      path: "/pages/Service/qd",
      name: "ServiceQuestion",
      component: Servicequestion,
    },
    {
      path: "/pages/Service/faq",
      name: "ServiceFaq",
      component: Servicefaq,
    },
    {
      path: "/pages/findtags/populartags",
      name: "PopularTag",
      component: Populartag,
    },
    {
      path: "/pages/findtags/recommendtags",
      name: "RecommendTag",
      component: Recommendtag,
    },
    {
      path: "/pages/selecttags",
      name: "SelectGoodTag",
      component: Selectgoodtag,
    },
    {
      path: "/pages/managerpage/managerpage",
      name: "ManagerPage",
      component: Managerpage,
    },
  ],
});

// 1 /home 2 /todos 3 /todos/create 4 /todos/:id

export default router;
