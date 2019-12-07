import React, { useState } from "react";

import { userContext } from "../contexts/userContext";

const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  return (
    <userContext.Provider value={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
