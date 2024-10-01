import { createContext, useContext, useState } from 'react';

// BasketContext'i oluştur
const BasketContext = createContext();

// Context provider bileşeni
export const BasketProvider = ({ children }) => {
  const [state, setState] = useState({
    basket: [],
    total: 0,
    isShowBasketModal: false,
  });

  return (
    <BasketContext.Provider value={{ state, setState }}>
      {children}
    </BasketContext.Provider>
  );
};

// Context'i kullanmak için özel bir hook
export const useBasketContext = () => useContext(BasketContext);
