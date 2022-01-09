import { createContext, useContext, useState } from "react";

const functionContext = createContext()

export function FunctionContextProvider({children}) {
  const [word, setWord] = useState('Введите')

  return (
    <functionContext.Provider value={{setWord, word}}>
      {children}
    </functionContext.Provider>
  )
}

export const useFunctionContext = () => useContext(functionContext)
