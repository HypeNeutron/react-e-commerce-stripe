import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import AppContextProvider from './hooks/context/context';
import App from './App';

/**
 * ----In Setting Auth0 App ----
 * Link DOC:https://classic.yarnpkg.com/en/package/@auth0/auth0-react#documentation
 * Domain in Auth0 App
 * ClientID
 * Add Auth0 Page http://localhost:3000 in Callback Lockout and webOrigin
 * cacheLocation to login
 * [PrivateRoute] when to prevent condition to page must Authenticated to access page
 * PrivateRoute Auth0 use in withAuthenticationRequired
 * <PrivateRoute><Checkout/></PrivateRoute>
 */
const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Auth0Provider>
);
