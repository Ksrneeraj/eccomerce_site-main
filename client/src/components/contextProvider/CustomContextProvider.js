import React from 'react'
import { createContext,useState } from 'react'
const NumberContext=createContext();

const NumberProvider=({children})=>{

  const [numberArray,setnumberArray]=useState([]);
  const addNumber=(num)=>{
    setnumberArray([...numberArray,num]);
  };
    
  return(
    <NumberContext.Provider value={{numberArray,addNumber}}>
      {children}
    </NumberContext.Provider>
  );
}

export {NumberContext,NumberProvider};
