import { useContext } from 'react';
import { BuyFromTokenContext } from '../contexts/BuyFromTokenContext';

const useBuyFromToken = () => useContext(BuyFromTokenContext);

export default useBuyFromToken;