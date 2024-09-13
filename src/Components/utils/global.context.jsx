import React, { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import actionTypes  from './actionsTypes';

export const initialState = {
  theme: 'light',
  dentists: [],
  favDentists: JSON.parse(localStorage.getItem('favDentists')) || [],
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(data => {
        dispatch({ type: actionTypes.SET_DENTISTS, payload: data });
      })
      .catch((error) => console.error(error));
  }, []);


  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
