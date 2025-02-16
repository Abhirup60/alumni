import { createContext, useContext, useEffect, useState } from "react";

// context creation
export const AuthContext = createContext();

// provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [serveciee, setServicee] = useState("");
  const [allusers, setAllUsers] = useState([]);
  const [allcontact, setAllContact] = useState([]);
  const authToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  const isLoggedin = !!token;
  console.log("isLoggedin: ", isLoggedin); //for debugging (ans will be true or false)

  // tackling logout functionalities
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    const response = await fetch("http://localhost:5000/api/auth/user", {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: authToken,
      },
    });

    // console.log("from userAuthentication: ", response);
    if (response.ok) {
      const res_data = await response.json();
      // console.log("user data: ", res_data.userData);
      setUser(res_data.userData);
    }
  };
  useEffect(() => {
    userAuthentication();
  }, []);

  // ------------- service logic in frontend -----------------//

  const userServiceProvide = async () => {
    const response = await fetch("http://localhost:5000/api/auth/service", {
      method: "GET",
    });

    console.log("service page response: ", response);
    if (response.ok) {
      const serviceData = await response.json();
      // console.log("object format service data from frontend: ", serviceData);
      setServicee(serviceData);
    }
  };

  useEffect(() => {
    userServiceProvide();
  }, []);

  // ------------- service logic in frontend -----------------//
  // ------------- get all user logic in frontend -----------------//

  const getAllUsers = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/admin/users",{
        method:"GET",
        headers: {
          Authorization: authToken,
        },
      })
      console.log(response);
      if(response.ok){
        const res_data = await response.json();
        // console.log("all users are: ",res_data.message);
        setAllUsers(res_data.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // ------------- get all user logic in frontend -----------------//
  // ------------- get all contact logic in frontend -----------------//
  const getAllContacts = async()=>{
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts",{
        method:"GET",
        headers:{
          Authorization: authToken,
        },
      })

      console.log(response);
      if(response.ok){
        const res_contact = await response.json();
        // console.log("all contact details: ",res_contact.message);
        setAllContact(res_contact.message);
      }
    } catch (error) {
      console.error("error", error);
    }
  }
  // ------------- get all contact logic in frontend -----------------//


  return (
    <AuthContext.Provider value={{ isLoggedin, storeTokenInLS, LogoutUser, user, serveciee, authToken, allusers ,getAllUsers, getAllContacts, allcontact}}>
      {children}
    </AuthContext.Provider>
  );
};

// consumer
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
