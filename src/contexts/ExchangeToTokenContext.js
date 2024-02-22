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
const ExchangeToTokenContext = createContext({
  ...initialState,
  openExchangeToTokenModal: () => Promise.resolve(),
  closeExchangeToTokenModal: () => Promise.resolve(),
});

//  Provider
function ExchangeToTokenProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openExchangeToTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeExchangeToTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <ExchangeToTokenContext.Provider
      value={{
        ...state,
        openExchangeToTokenModal,
        closeExchangeToTokenModal,
      }}
    >
      {children}
    </ExchangeToTokenContext.Provider>
  );
}

export { ExchangeToTokenContext, ExchangeToTokenProvider };