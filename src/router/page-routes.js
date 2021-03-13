import Layout from "@/layout";
const PAGE_ROUTES = [
  {
    path: "/",
    name: "dashboard",
    redirect: "/dashboardIndex",
    hidden: false,
    meta: {
      icon: "el-icon-s-promotion",
      title: "Dashboard",
    },
    component: Layout,
    children: [
      {
        path: "dashboardIndex",
        name: "DashboardIndex",
        hidden: false,
        meta: {
          icon: "el-icon-document",
          title: "DashboardIndex",
        },
        component: () => import("@/views/Dashboard/DashboardIndex.vue"),
        children: [],
      },
    ],
  },
  {
    path: "/one",
    name: "One",
    hidden: false,
    meta: {
      icon: "el-icon-document",
      title: "\u4E00\u7EA7\u83DC\u5355",
    },
    component: Layout,
    children: [
      {
        path: "table",
        name: "Table",
        hidden: false,
        meta: {
          icon: "el-icon-document",
          title: "\u4E8C\u7EA7\u83DC\u5355",
        },
        component: () => import("@/views/One/Table.vue"),
        children: [],
      },
      {
        path: "three",
        name: "Three",
        hidden: false,
        meta: {
          icon: "el-icon-document",
          title: "\u8868\u5355",
        },
        component: () => import("@/views/One/Three.vue"),
        children: [],
      },
      {
        path: "four",
        name: "Four",
        hidden: false,
        meta: {
          icon: "el-icon-document",
          title: "\u65B0\u7684\u9875\u9762",
        },
        component: () => import("@/views/One/Four.vue"),
        children: [],
      },
    ],
  },
];
export default PAGE_ROUTES;
