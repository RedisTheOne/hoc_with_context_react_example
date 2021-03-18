import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralProvider = (props) => {
  const [title, setTitle] = useState('default title');
  const [status, setStatus] = useState(5);
  const value = {
    title,
    setTitle,
    status,
    setStatus
  };

  return (
    <GeneralContext.Provider value={value}>
      {props.children}
    </GeneralContext.Provider>
  );
};