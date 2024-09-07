import { createContext, useEffect, useState } from "react";

export const FactoryContext = createContext();

const FactoryContextProvider = (props) => {
  const [menu, setMenu] = useState(() => {
    
    return localStorage.getItem('menu') || 'Home';
  });

  useEffect(() => {
    
    localStorage.setItem('menu', menu);
  }, [menu]);

  const contextValue = {
    menu,
    setMenu
  };

  return (
    <FactoryContext.Provider value={contextValue}>
      {props.children}
    </FactoryContext.Provider>
  );
};

export default FactoryContextProvider;
