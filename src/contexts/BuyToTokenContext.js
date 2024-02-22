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
const BuyToTokenContext = createContext({
  ...initialState,
  openBuyToTokenModal: () => Promise.resolve(),
  closeBuyToTokenModal: () => Promise.resolve(),
});

//  Provider
function BuyToTokenProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openBuyToTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeBuyToTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <BuyToTokenContext.Provider
      value={{
        ...state,
        openBuyToTokenModal,
        closeBuyToTokenModal,
      }}
    >
      {children}
    </BuyToTokenContext.Provider>
  );
}

export { BuyToTokenContext, BuyToTokenProvider };