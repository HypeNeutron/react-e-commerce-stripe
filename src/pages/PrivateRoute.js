import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useCartContext } from '../hooks/context/cart_context';

const PrivateRoute = ({ children, ...params }) => {
  const { user } = useAuth0();
  const { total_items: totalItems } = useCartContext();

  return (
    <Route
      {...params}
      render={() => {
        return user && totalItems > 0 ? children : <Redirect to='/'></Redirect>;
      }}></Route>
  );
};
export default PrivateRoute;
