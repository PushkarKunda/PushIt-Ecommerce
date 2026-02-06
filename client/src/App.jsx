import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css'
import AuthLayout from "@/components/auth/layout.jsx";
import { Routes, Route } from "react-router-dom";
import AuthLogin from "@/pages/auth/login.jsx";
import AuthRegister from "@/pages/auth/register.jsx";
import AdminLayout from "@/components/admin/layout.jsx";
import AdminDashboard from "@/pages/admin/dashboard.jsx";
import AdminProducts from "@/pages/admin/products.jsx";
import AdminOrders from "@/pages/admin/orders.jsx";
import AdminFeatures from "@/pages/admin/features.jsx";
import ShoppingLayout from "@/components/shopping/layout.jsx";
import NotFound from "@/pages/notFound/notFound.jsx";
import ShoppingHome from "@/pages/shopping/home.jsx";
import ShoppingListing from "@/pages/shopping/listing.jsx";
import ShoppingCheckout from "@/pages/shopping/checkout.jsx";
import ShoppingAccount from "@/pages/shopping/account.jsx";
import CheckAuth from './components/common/checkAuth';
import UnauthPage from "@/pages/unauthPage/index.jsx";
import { checkAuth } from './store/auth-slice';
import { Skeleton } from "@/components/ui/skeleton";

function App() {
  const {user, isAuthenticated, isLoading} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if(isLoading){
    return <Skeleton className="w-[800] bg-black h-[600]"></Skeleton>
  }

  return (
    <div className="header-container">
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user} >
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="/auth/login" element={<AuthLogin />}></Route>
          <Route path="/auth/register" element={<AuthRegister />}></Route>
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="/shop/home" element={<ShoppingHome />} />
          <Route path="/shop/listing" element={<ShoppingListing />} />
          <Route path="/shop/checkout" element={<ShoppingCheckout />} />
          <Route path="/shop/account" element={<ShoppingAccount />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/unauth-page" element={<UnauthPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
