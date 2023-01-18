import { createContext, useContext, useEffect, useState } from "react";
import { FaAddressBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getAddressFromCoordinates } from "../services/google-service";
import { login, logout } from "../services/session-service";
import { createUser, getUser } from "../services/users-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  const [coordinates, setCoordinates] = useState({ lat: -12.2, lng: -77.02 });
  const [address, setAddress] = useState(null)
  const [properties, setProperties] = useState([]);
  const [savedProperty, setSavedProperty] = useState(JSON.parse(sessionStorage.getItem("savedProperty")) || []);
  const [myProperty, setMyProperty] = useState(JSON.parse(sessionStorage.getItem("myProperty")) || []);
  const [userType, setUserType] = useState(JSON.parse(sessionStorage.getItem("userType")))
  const [currentProperty, setCurrentProperty] = useState(JSON.parse(sessionStorage.getItem("currentProperty")) || []);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [error, setError] = useState(null);
  const [propertyFilter, setPropertyFilters] = useState({
    prices: { min: null, max: null },
    areas: { min: null, max: null },
    types: [false, false], //house, apartment
    petAllowed: null,
    beds: 0,
    baths: 0,
    mode: [false, false], //buy, rent
    search: ""
  })


  const navigate = useNavigate();

  useEffect(() => {

    getUser()
      .then(response => {
        setUser(response);

      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(()=>{
    const addresArray = []
    properties.map(property=>{
      getAddressFromCoordinates(property.property.latitud, property.property.longitud)
      .then(data =>{
        addresArray?.push({id:property.property.id , address: data.results[0].formatted_address});
        
      })
    })
    setAddress(addresArray)
  },[properties])

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      setUserType(user.user_type);
      setIsOpenModal(false);
      sessionStorage.setItem("user", JSON.stringify(user))
      sessionStorage.setItem("userType", JSON.stringify(user.user_type))
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
      sessionStorage.removeItem("user")
      sessionStorage.removeItem("userType")
      sessionStorage.removeItem("savedProperty")
      setUser(null)
      setSavedProperty([])
      setUserType(null)
      setMyProperty([])
      setCurrentProperty([])
      setPropertyFilters({
        prices: { min: null, max: null },
        areas: { min: null, max: null },
        types: [false, false], //house, apartment
        petAllowed: null,
        beds: 0,
        baths: 0,
        mode: [false, false], //buy, rent
        search: ""
      })
      navigate("/home");
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
        setUserType,
        error,
        address,
        propertyFilter,
        setPropertyFilters,
        setProperties,
        setError,
        login: handleLogin,
        logout: handleLogout,
        signup: handleSignup,
        setUser,
        setIsOpenModal,
        setCurrentProperty,
        setSavedProperty,
        savedProperty,
        myProperty,
        setMyProperty,
        coordinates, 
        setCoordinates,
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
