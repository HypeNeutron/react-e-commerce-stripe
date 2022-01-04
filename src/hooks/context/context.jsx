import React, { cloneElement } from 'react';
import { ProductsProvider } from './products_context';
import { FilterProductProvider } from './filterProduct_context';
import { CartProvider } from './cart_context';
import { UserProvider } from './user_context';

function ProviderComposer({ contexts, children }) {
  return contexts.reduce(
    (kids, parent) =>
      cloneElement(parent, {
        children: kids,
      }),
    children
  );
}

export default function AppContextProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[
        <CartProvider key={0} />,
        <FilterProductProvider key={1} />,
        <ProductsProvider key={2} />,
        <UserProvider key={3} />,
      ]}
    >
      {children}
    </ProviderComposer>
  );
}
