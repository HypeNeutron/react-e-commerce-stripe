import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, SidebarNavigator, Footer } from './components';

import {
  Home,
  SingleProduct,
  Cart,
  CheckOut,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
} from './pages';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <SidebarNavigator />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
          <Route
            exact
            path="/checkout"
            element={
              <PrivateRoute>
                <CheckOut />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
