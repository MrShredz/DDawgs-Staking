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
const ExchangeFromTokenContext = createContext({
  ...initialState,
  openExchangeFromTokenModal: () => Promise.resolve(),
  closeExchangeFromTokenModal: () => Promise.resolve(),
});

//  Provider
function ExchangeFromTokenProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openExchangeFromTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: true
    });
  };

  const closeExchangeFromTokenModal = () => {
    dispatch({
      type: 'SET_MODAL_IS_OPENED',
      payload: false
    });
  };

  return (
    <ExchangeFromTokenContext.Provider
      value={{
        ...state,
        openExchangeFromTokenModal,
        closeExchangeFromTokenModal,
      }}
    >
      {children}
    </ExchangeFromTokenContext.Provider>
  );
}

export { ExchangeFromTokenContext, ExchangeFromTokenProvider };