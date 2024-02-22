import { useMemo } from "react";
import StakingAbi from '../contracts/abi/StakeAbi.json';
import DDawgsAbi from '../contracts/abi/DDawgsAbi.json';
import { getContract } from '../utils'
import useActiveWeb3React from './useActiveWeb3React';
import { StakingAddress, DDawgsAddress } from "../contracts/address";

function useContract(address, ABI, withSignerIfPossible = true) {
    const { library, account } = useActiveWeb3React();

    return useMemo(() => {
        if (!address || !ABI || !library) return null;
        try {
            return getContract(
                address,
                ABI,
                library,
                withSignerIfPossible && account ? account : undefined
            );
        } catch (error) {
            console.error("Failed to get contract", error);
            return null;
        }
    }, [address, ABI, library, withSignerIfPossible, account]);
}

export function useStakingContract(withSignerIfPossible = true) {
    return useContract(StakingAddress, StakingAbi, withSignerIfPossible);
}

export function useDDawgsContract(withSignerIfPossible = true) {
    return useContract(DDawgsAddress, DDawgsAbi, withSignerIfPossible);
}
