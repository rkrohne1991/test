import {
  createContext,
  ReactNode,
  useContext,
  useState,
  // useEffect,
} from 'react';

// import { getUser } from '../pages/api/getUser';
import { UserType } from '../state/userType';

type CurrentUser = UserType | null;

interface authContextType {
  user: CurrentUser;
  login: (user: CurrentUser) => void;
  logout: (user: CurrentUser) => void;
}

const authContextDefaultValues: authContextType = {
  user: null,
  login: (user: CurrentUser) => user,
  logout: (user: CurrentUser) => user,
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);

  // useEffect(() => {
  //   const getTheUser = getUser();
  //   getTheUser
  //     .then(user => {
  //       setUser(user as CurrentUser);
  //     })
  //     .catch(() => {
  //       setUser(null);
  //       window.alert('Oops! Something went wrong');
  //     });
  // }, []);

  const login = (user: CurrentUser) => {
    setUser(user);
  };

  const logout = (_: CurrentUser) => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
