import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/session-service";
import { createUser, getUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [select, setSelect] = useState("italian");
  // const [actualProduct, setActualProduct] = useState(null);
  // const [cart, setCart] = useState(sessionStorage.getItem("cart") || []);
  // const [items, setItems] = useState(sessionStorage.getItem("items") || []);

  // const navigate = useNavigate();

  // useEffect(() => {
   
  //   getUser()
  //     .then(setUser)
  //     .catch((error) => console.log(error));
  // }, []);

  // function handleLogin(credentials) {
  //   return login(credentials).then((user) => {
  //     setUser(user);
  //     // navigate("/categories");
  //   });
  // }

  // function handleSignup(userData) {
  //   return createUser(userData).then((user) => {
  //     setUser(user);
  //     // navigate("/categories");
  //   });
  // }

  // function handleLogout() {
  //   return logout().finally(() => {
  //     setUser(null);
  //     // navigate("/");
  //   });
  // }

  return (
    <AuthContext.Provider
      value={{

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
