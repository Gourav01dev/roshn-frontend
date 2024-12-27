import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "../components/Layout.tsx";
import React from "react";


// Lazy loaded components
const UserList = lazy(() => import("../pages/UserList.tsx"));
const DetailPage = lazy(() => import("../pages/DetailPage.tsx"));
const ErrorPage = lazy(() => import("../pages/ErrorPage.tsx"));

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <UserList />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
      {
        path: "*", // 404 page
        element: <ErrorPage />,
      },
    ],
  },
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      {/* Fallback UI for lazy-loaded components */}
      {useRoutes(routes)}
    </Suspense>
  );
};

export default AppRoutes;
