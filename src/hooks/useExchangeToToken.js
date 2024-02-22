import { useContext } from 'react';
import { ExchangeToTokenContext } from '../contexts/ExchangeToTokenContext';

const useExchangeToToken = () => useContext(ExchangeToTokenContext);

export default useExchangeToToken;