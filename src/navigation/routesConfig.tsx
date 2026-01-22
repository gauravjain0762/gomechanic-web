import { lazy, type ReactNode } from "react";
import App from "../App.jsx";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Admin = lazy(() => import("../pages/Admin"));
const NotFound = lazy(() => import("../pages/NotFound"));

type BreadcrumbFn = (args: { params: Record<string, string> }) => string;

interface AppRoute {
  path?: string;
  element?: ReactNode;
  protected?: boolean;
  roles?: string[];
  handle?: {
    breadcrumb?: string | BreadcrumbFn;
  };
  children?: AppRoute[];
}

export const routesConfig: AppRoute[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        protected: true,
        handle: {
          breadcrumb: "Home",
        },
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        protected: true,
        roles: ["USER", "ADMIN"],
        handle: {
          breadcrumb: "Dashboard",
        },
      },
      {
        path: "/admin",
        element: <Admin />,
        protected: true,
        roles: ["ADMIN"],
        handle: {
          breadcrumb: "Admin",
        },
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
        handle: {
          breadcrumb: "Login",
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
