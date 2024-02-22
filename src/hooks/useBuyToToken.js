import { useContext } from 'react';
import { BuyToTokenContext } from '../contexts/BuyToTokenContext';

const useBuyToToken = () => useContext(BuyToTokenContext);

export default useBuyToToken;