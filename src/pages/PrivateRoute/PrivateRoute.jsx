import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../../context/cart_context';

export default function PrivateRoute() {
  const { user } = useAuth0();
  const { total_items: totalItems } = useCartContext();
  return user && totalItems > 0 ? <Outlet /> : <Navigate to="/" />;
}
