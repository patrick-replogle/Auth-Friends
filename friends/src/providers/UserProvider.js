import React, { useState } from "react";

import { userContext } from "../contexts/userContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useLocalStorage("");
  return (
    <userContext.Provider value={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
