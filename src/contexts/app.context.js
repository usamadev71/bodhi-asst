import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "Alabama",
    zip: "",
    cardNumber: "",
    cardExp: "",
    cardCVC: "",
  });

  const contextValue = {
    formState: formState,

    handleChange: (e) => {
      setFormState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },

    handleBlur: (e) => {
      console.log("e", e);
      setFormState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    },
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
