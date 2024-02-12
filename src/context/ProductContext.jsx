import { createContext, useContext, useState } from "react";


const ProductContext = createContext({})

export const useDataProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export function ProductContextProvider({ children }) {
  const [cart, setCart] = useState([])
  const [openCartModal, setOpenCartModal] = useState(false)


  return (
    <ProductContext.Provider value={{
      cart,
      setCart,
      openCartModal, 
      setOpenCartModal
    }}>
      {children}
    </ProductContext.Provider>
  )
}