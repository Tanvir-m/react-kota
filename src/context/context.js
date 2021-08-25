import { createContext, useState } from 'react';

export const Context = createContext();

const ContextCom = (props) => {
  const [brand, setBrand] = useState(false);
  const [dm, setDm] = useState(false);
  const [web, setWeb] = useState(false);
  const [all, setAll] = useState(true);

  const StoreValues = {
    tabGal: {
      brand,
      setBrand,
      dm,
      setDm,
      web,
      setWeb,
      all,
      setAll,
    },
  };
  return (
    <>
      <Context.Provider value={StoreValues}>{props.children}</Context.Provider>
    </>
  );
};

export default ContextCom;
