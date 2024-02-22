import { useContext } from 'react';
import { ExchangeFromTokenContext } from '../contexts/ExchangeFromTokenContext';

const useExchangeFromToken = () => useContext(ExchangeFromTokenContext);

export default useExchangeFromToken;