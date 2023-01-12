import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/session-service";
import { createUser, getUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [properties, setProperties]= useState([]);
  const [userType, setUserType] = useState(null);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState(null);
  const [propertyFilter, setPropertyFilters] = useState({
    prices: null,
    areas:null,
    types: null,
    petAllowed: null,
    beds: null,
    baths:null,

  })


  // const navigate = useNavigate();

  useEffect(() => {

    getUser()
      .then(response => {
        setUser(response);

      })
      .catch((error) => console.log(error));
  }, []);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      setUserType(user.user_type);
      setIsOpenModal(false);
      sessionStorage.setItem("user", JSON.stringify(user))
    }).catch(error => {
      setError(error.message)
    });
  }

  function handleSignup(userData) {
    return createUser(userData).then((user) => {
      setUser(user);
    });
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      // navigate("/");
    });
  }

  return (
    <AuthContext.Provider
      value={{
        properties,
        user,
        isOpenModal,
        currentProperty,
        userType,
        error,
        propertyFilter,
        setPropertyFilters,
        setProperties,
        setError,
        login: handleLogin,
        logout: handleLogout,
        signup: handleSignup,
        setUser,
        setIsOpenModal,
        setCurrentProperty

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
