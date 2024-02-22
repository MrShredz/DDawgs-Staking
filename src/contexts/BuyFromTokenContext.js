import React, { createContext, useReducer } from 'react';

// ----------------------------------------------------------------------

const initialState = {
  modalIsOpened: false,
};

const handlers = {
  SET_MODAL_IS_OPENED: (state, action) => {
    return {
      ...state,
      modalIsOpened: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const BuyFromTokenContext = createContext({
  ...initialState,
  openBuyFromTokenModal: () => Promise.resolve(),
  closeBuyFromTokenModal: () => Promise.resolve(),
});

//  Provider
function BuyFromTokenProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openBuyFromTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeBuyFromTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <BuyFromTokenContext.Provider
      value={{
        ...state,
        openBuyFromTokenModal,
        closeBuyFromTokenModal,
      }}
    >
      {children}
    </BuyFromTokenContext.Provider>
  );
}

export { BuyFromTokenContext, BuyFromTokenProvider };