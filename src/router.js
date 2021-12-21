import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RecipeContent from "./views/RecipeContent.vue";
import MealPlanning from "./views/MealPlanning.vue";

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/recipe-content',
        name: 'RecipeContent',
        component: RecipeContent
      },
      {
        path: '/meal-planning',
        name: 'MealPlanning',
        component: MealPlanning
      },
    ]
})