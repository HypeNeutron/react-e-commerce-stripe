import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../../hooks/context/cart_context';

export default function PrivateRoute({ children }) {
  const { user } = useAuth0();
  const { total_items: totalItems } = useCartContext();
  return user && totalItems > 0 ? children : <Navigate to="/" />;
}
