import { lazy, type ReactNode } from "react";
// @ts-ignore
import App from "../App.jsx";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const Login = lazy(() => import("../pages/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Admin = lazy(() => import("../pages/Admin"));
const NotFound = lazy(() => import("../pages/NotFound"));

// @ts-ignore
const CarServices = lazy(() => import("../components/sections/CarServices"));

// Import your new pages with TypeScript ignore
// @ts-ignore
const Gallery = lazy(() => import("../components/sections/GalleryPage"));
// @ts-ignore
const Contact = lazy(() => import("../components/sections/Contact"));
// @ts-ignore
const AboutUs = lazy(() => import("../components/sections/AboutUs"));
// @ts-ignore
const FAQ = lazy(() => import("../components/sections/FAQ"));

// Placeholder component for coming soon pages
const ComingSoon = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
      <p className="text-gray-400 text-xl">Coming Soon...</p>
    </div>
  </div>
);

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
  // Public Routes WITHOUT MainLayout (they have their own navigation)
  {
    path: "/services",
    element: <CarServices />,
    handle: {
      breadcrumb: "Car Services",
    },
  },
  {
    path: "/gallery",
    element: <Gallery />,
    handle: {
      breadcrumb: "Gallery",
    },
  },
  {
    path: "/contact",
    element: <Contact />,
    handle: {
      breadcrumb: "Contact",
    },
  },
  {
    path: "/about",
    element: <AboutUs />,
    handle: {
      breadcrumb: "About Us",
    },
  },
  {
    path: "/faq",
    element: <FAQ />,
    handle: {
      breadcrumb: "FAQ",
    },
  },
  // Coming Soon Pages
  {
    path: "/clutch",
    element: <ComingSoon title="Clutch Services" />,
    handle: {
      breadcrumb: "Clutch",
    },
  },
  {
    path: "/ac",
    element: <ComingSoon title="AC Services" />,
    handle: {
      breadcrumb: "AC",
    },
  },
  {
    path: "/spa",
    element: <ComingSoon title="SPA Services" />,
    handle: {
      breadcrumb: "SPA",
    },
  },
  {
    path: "/mechanical",
    element: <ComingSoon title="Mechanical Services" />,
    handle: {
      breadcrumb: "Mechanical",
    },
  },
  {
    path: "/more",
    element: <ComingSoon title="More Services" />,
    handle: {
      breadcrumb: "More",
    },
  },
  {
    path: "/blog",
    element: <ComingSoon title="Blog" />,
    handle: {
      breadcrumb: "Blog",
    },
  },
  // Auth Routes
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
  // 404 Route
  {
    path: "*",
    element: <NotFound />,
  },
];