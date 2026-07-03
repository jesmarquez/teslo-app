import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { ShopLayout } from "./shop/layouts/ShopLayout";
import { HomePage } from "./shop/pages/home/HomePage";
import { AdminProductPage } from "./admin/pages/product/AdminProductPage";
import { GenderPage } from "./shop/pages/gender/GenderPage";
import { LoginPage } from "./auth/pages/login/LoginPage";
import { RegisterPage } from "./auth/pages/register/RegisterPage";
import { DashBoardPage } from "./admin/pages/dashboard/DashBoardPage";
import { AdminProductsPage } from "./admin/pages/products/AdminProductsPage";
import { ProductPage } from "./shop/pages/product/ProductPage";
import { AdminRoute, NotAuthenticatedRoute } from "./components/routes/ProtectedRoutes";

const AuthLayout = lazy(() => import('./auth/layouts/AuthLayout'));
const AdminLayout = lazy(() => import('./admin/layouts/AdminLayout'));

export const appRouter = createBrowserRouter([
  // Main routes
  {
    path: '/',
    element: <ShopLayout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />
      }
    ]
  },

  // Auth routes
  {
    path: '/auth',
    element: 
      <NotAuthenticatedRoute>
        <AuthLayout/>
      </NotAuthenticatedRoute>,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login"/>
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  },
  //Admin routes
  {
    path: '/admin',
    element: 
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>,
    children: [
      {
        index: true,
        element: <DashBoardPage />
      },
      {
        path: 'products',
        element: <AdminProductsPage/>
      },
      {
        path: 'product/:id',
        element: <AdminProductPage/>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/"/>
  },
])