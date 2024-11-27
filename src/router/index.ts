import { RouteNames } from "@/shared/enum/app.enum";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: RouteNames.HOME,
      component: HomeView,
    },
    {
      path: "/economic-calendar",
      name: RouteNames.ECONOMIC_CALENDAR,
      component: () => import("@/views/EconomicCalendarView.vue"),
    },
    {
      path: "/company-alerts",
      name: RouteNames.COMPANY_ALERTS,
      component: () => import("@/views/CompanyAlertsView.vue"),
    },
    {
      path: "/investor-info",
      name: RouteNames.INVESTOR_INFO,
      component: () => import("@/views/InvestorInfoView.vue"),
    },
    {
      path: "/news",
      name: RouteNames.NEWS,
      component: () => import("@/views/NewsView.vue"),
    },
    {
      path: "/investor-summary",
      name: RouteNames.INVESTOR_SUMMARY,
      component: () => import("@/views/InvestorSummaryView.vue"),
    },
  ],
});

export default router;
