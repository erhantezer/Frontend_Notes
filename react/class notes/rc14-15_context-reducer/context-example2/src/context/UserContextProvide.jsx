import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

//? 1- Defining
export const UserContext = createContext();

//? 3- Consume Function (Custom Hook)

export const useUserContext = () => {
  return useContext(UserContext);
};

//? 2- Provider Component
const UserContextProvider = ({ children }) => {
  //* Her componentin children props vardır.

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const changeWidth = (id, width) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, width: width } : user))
    );
  };
  const values = { users, changeWidth };

  //! Childlara gönderilecek (☝️) değişken sayılar birden fazla ise object kullanılır.

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
