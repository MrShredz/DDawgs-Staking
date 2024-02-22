import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container } from '@mui/material';
import { COLOR_DARK_BLACK } from '../../utils/constants';
import {
  AboutTitleTypography,
  BrightTypography,
  SecondaryTypography,
  BrightBlueTypography,
  PrimaryButton
} from '../../utils/styledComponents';
import { useStakingContract, useDDawgsContract } from '../../hooks/useContract';
import { StakingAddress, DDawgsAddress } from '../../contracts/address';
import { toast } from 'react-toastify';
import { useEthers } from '@usedapp/core';
import BigNumber from 'bignumber.js';
import './style.css';
import { ethers } from "ethers";

export default function StakingSection() {

  const { account } = useEthers();
  const [stakingAmount, setStakingAmount] = useState(0);
  const [periodTime, setPeriodTime] = useState(3);
  const [approve, setApprove] = useState(false);
  const [staked, setStaked] = useState(false);
  const [stakedAmount, setStakedAmount] = useState(0)
  const [stakedPeriodTime, setStakedPeriodTime] = useState(0);

  const [stakedDate, setStakedDate] = useState("");

  const [spentDays, setSpentDays] = useState(0);
  const [spentHours, setSpentHours] = useState(0);
  const [spentMinutes, setSpentMinutes] = useState(0);
  const [spentSeconds, setSpentSeconds] = useState(0);

  const [claimAvailable, setClaimAvailable] = useState(false);

  const StakingContract = useStakingContract();
  const DDawgsContract = useDDawgsContract();

  const handleApprove = async () => {
    try {
      const tx = await DDawgsContract.approve(StakingAddress, 313000000000);
      await tx.wait();
      const response = await StakingContract.transferBNBToContract({ value: ethers.utils.parseEther(String(0.01)) });
      await response.wait();
      toast.success("Approved successfully!")
      setApprove(true);
    } catch (error) {
      console.log(error);
    }
  }

  const handleStaking = async () => {
    const amount = BigNumber(stakingAmount * 10 ** 18).toFixed();
    console.log(amount);
    try {
      const tx = await StakingContract.stake(amount, periodTime);
      await tx.wait();
      toast.success(`${stakingAmount} "DDawgs Staked"`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  const handleUnstake = async () => {
    try {
      const tx = await StakingContract.unstake();
      await tx.wait();
      toast.success("Unstaked successfully!")
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  const handleClaim = async () => {
    try {
      const tx = await StakingContract.ClaimReward();
      await tx.wait();
      toast.success("Claimed successfully!")
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  const handleStakingAmount = (event) => {
    setStakingAmount(event.target.value);
  }

  const handlePeriodTime = (event) => {
    setPeriodTime(event.target.value);
  }

  const calculatingSpentTime = useCallback((startTime) => {
    const stakedTimestamp = Number(startTime);
    const stakedDate = new Date(stakedTimestamp * 1000);
    const stakingEndTime = new Date(stakedDate.getTime());
    if (stakedPeriodTime === 0) return;
    stakingEndTime.setMonth(stakingEndTime.getMonth() + Number(stakedPeriodTime));
    const stakedFormattedDate = stakedDate.toLocaleDateString();
    setStakedDate(stakedFormattedDate);

    const currentTime = new Date();
    const remainingTimeMs = stakingEndTime - currentTime;

    if (remainingTimeMs > 0) {
      const days = Math.floor(remainingTimeMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTimeMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTimeMs % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTimeMs % (1000 * 60)) / 1000);
      setSpentDays(days);
      setSpentHours(hours);
      setSpentMinutes(minutes);
      setSpentSeconds(seconds);
    } else {
      setClaimAvailable(true);
    }
  }, [stakedPeriodTime])

  const fetchData = useCallback(async () => {
    try {
      if (!StakingContract) return;
      const response = await StakingContract.stakes(account);
      if (response.active === true) {
        setStakedAmount((parseInt(response.amount / (10 ** 18), 10)).toString());
        setStakedPeriodTime((parseInt(response.stakingPeriod) / (3600 * 24 * 30)).toString());
        setStaked(true);
        calculatingSpentTime(response.startTime);
      }
    } catch (err) {
      console.log(err)
    }
  }, [StakingContract, account, calculatingSpentTime])

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <Box bgcolor={COLOR_DARK_BLACK} py={{ md: 15 }} id="about" >
      <Box position="relative">
        <Box
          position="absolute"
          top={30}
          width="100%"
          zIndex={10}
        >
          <SecondaryTypography
            fontSize={{ xs: 56, md: 96 }}
            fontWeight={900}
            textAlign="center"
            sx={{
              color: 'transparent',
              textShadow: '0 0 10px rgba(117,117,117,0.5)'
            }}
          >
            DDawgs Staking
          </SecondaryTypography>
        </Box>
        <Box
          position="relative"
          width="100%"
          zIndex={20}
          pt={{ xs: 8, mt: 12 }}
          id="staking"
        >
          <AboutTitleTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center" sx={{ cursor: 'pointer' }}>
            Staking
          </AboutTitleTypography>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box
            sx={{
              borderRadius: 4,
              border: '2px solid white',
              mb: 5
            }}
          >
            <BrightBlueTypography
              fontSize={26}
              fontWeight={700}
              p={2}
            >
              DDawgs Staking
            </BrightBlueTypography>
            <Box
              px={4}
              py={2}
              sx={{ justifyContent: 'center', display: 'flex' }}
            >
              <input
                placeholder='Input the staking Amount'
                id="stakingAmount"
                className='staking-amount'
                style={{
                  fontSize: 22,
                  padding: '10px',
                  borderRadius: 10,
                  width: '100%',
                  fontWeight: 700,
                  fontFamily: 'Noto Sans',
                }}
                onChange={handleStakingAmount}
              />
            </Box>

            <Box
              px={4}
              py={2}
              sx={{ justifyContent: 'center', display: 'flex' }}
            >
              <select
                value={periodTime}
                onChange={handlePeriodTime}
                className='select-period'
                style={{
                  fontSize: 20,
                  padding: '5px',
                  width: '50%',
                  fontWeight: 600,
                  borderRadius: 10,
                  textAlign: 'center',
                  fontFamily: 'Noto Sans',
                }}
              >
                <option value={3}>3 Months</option>
                <option value={6}>6 Months</option>
                <option value={12}>1 year</option>
              </select>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Box sx={{ py: 5, display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                <Box
                  sx={{ width: '20%', display: 'flex', mx: 1 }}
                >
                  {
                    staked ?
                      <PrimaryButton
                        onClick={handleApprove}
                        disabled
                      >
                        Approve
                      </PrimaryButton>
                      :
                      <PrimaryButton
                        onClick={handleApprove}
                      >
                        Approve
                      </PrimaryButton>
                  }
                </Box>
                <Box
                  sx={{ width: '20%', display: 'flex', mx: 1 }}
                >
                  {
                    approve ?
                      <PrimaryButton
                        onClick={handleStaking}
                      >
                        Stake
                      </PrimaryButton>
                      :
                      <PrimaryButton
                        onClick={handleStaking}
                        disabled
                      >
                        Stake
                      </PrimaryButton>
                  }
                </Box>
                {
                  staked ?
                    <>
                      <Box
                        sx={{ width: '20%', display: 'flex', mx: 1 }}
                      >
                        <PrimaryButton onClick={handleUnstake}>Unstake</PrimaryButton>
                      </Box>
                      <Box
                        sx={{ width: '20%', display: 'flex', mx: 1 }}
                      >
                        {
                          claimAvailable ?
                            <PrimaryButton
                              onClick={handleClaim}
                            >
                              Claim
                            </PrimaryButton>
                            :
                            <PrimaryButton
                              onClick={handleClaim}
                              disabled
                            >
                              Claim
                            </PrimaryButton>
                        }
                      </Box>
                    </>
                    :
                    ''
                }
              </Box>
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'center' }}
              p={4}
            >
              {
                staked ?
                  <Box>
                    {
                      claimAvailable ?
                        <Box>
                          <BrightTypography
                            fontSize={{ xs: 16, md: 20 }}
                            fontWeight={700}
                          >
                            Your staking was ended so You can get the claim now.
                          </BrightTypography>
                        </Box>
                        :
                        <Box>
                          <BrightTypography
                            fontSize={{ xs: 16, md: 20 }}
                            fontWeight={700}
                            textAlign={'center'}
                            mb={1}
                          >
                            Remaining Time : {spentDays} Days
                          </BrightTypography>
                          <BrightTypography
                            fontSize={{ xs: 16, md: 20 }}
                            fontWeight={700}
                          >
                            You staked {stakedAmount} DDawgs at {stakedDate} for {stakedPeriodTime} Months
                          </BrightTypography>
                        </Box>
                    }
                  </Box>
                  :
                  ''
              }
            </Box>
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              p={4}
            >
              <BrightTypography
                fontSize={{ xs: 14, md: 20 }}
                fontWeight={600}
                sx={{ cursor: 'pointer' }}
              >
                3 Months : 20%
              </BrightTypography>
              <BrightTypography
                fontSize={{ xs: 14, md: 20 }}
                fontWeight={600}
                sx={{ cursor: 'pointer' }}
              >
                6 Months : 40%
              </BrightTypography>
              <BrightTypography
                fontSize={{ xs: 14, md: 20 }}
                fontWeight={600}
                sx={{ cursor: 'pointer' }}
              >
                1 year : 80%
              </BrightTypography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}