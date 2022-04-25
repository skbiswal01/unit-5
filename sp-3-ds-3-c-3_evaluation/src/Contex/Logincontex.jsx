import React, { createContext, useState } from "react";

const LoginContext = createContext(undefined);

function LoginProvider({ children }) {
  const [login, setlogin] = useState(false);

const handlelogin = ()=>{
    setlogin(!login)
}

  return (
    <LoginContext.Provider value={{login , handlelogin}}>
        {children}
    </LoginContext.Provider>
  );
}

export { LoginProvider, LoginContext };