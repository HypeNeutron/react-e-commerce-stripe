import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export function UserProvider({ children }) {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  const allValue = React.useMemo(() => {
    return { loginWithRedirect, myUser, logout };
  }, [loginWithRedirect, myUser, logout]);

  return (
    <UserContext.Provider value={allValue}>{children}</UserContext.Provider>
  );
}

// make sure use
export const useUserContext = () => useContext(UserContext);
