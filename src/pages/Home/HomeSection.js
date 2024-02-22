import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from "@mui/material";
import { COLOR_GREEN } from '../../utils/constants';
import {
  BrightTypography,
  DescriptionTypography,
  GreenTypography,
  BrightBlueTypography
} from '../../utils/styledComponents';
import { useDDawgsContract } from '../../hooks/useContract';
import { DDawgsAddress } from '../../contracts/address';
import { useEthers } from '@usedapp/core';
import { ethers } from "ethers";
import './style.css';

export default function HomeSection() {
  const [ tokenTotalSupply, setTokenTotalSupply ] = useState(0);
  const DDawgsContract = useDDawgsContract();

  const getTokenSupply = async () => {
    const totalSupply = await DDawgsContract.totalSupply();
    setTokenTotalSupply(Number(totalSupply)/(10 ** 18));
  }

  useEffect(() => {
    getTokenSupply();
  }, []);

  return (
    <Box
      sx={{
        background: 'url(/assets/images/bg.jpg) no-repeat',
        backgroundSize: 'cover'
      }}
      pt={{ xs: 3, md: 10 }}
      id="home"
    >
      <Container maxWidth="xl">
        <GreenTypography
          fontSize={{ xs: 48, md: 78 }}
          fontWeight={900}
          textAlign={'center'}
          color={'#49c2ff'}
          sx={{ cursor: 'pointer' }}
        >
          Deputy Dawgs
        </GreenTypography>
        <GreenTypography
          mt={3}
          fontSize={{ xs: 28, md: 36 }}
          fontWeight={700}
          textAlign={'center'}
          className='title-content'
          sx={{ cursor: 'pointer' }}
        >
          Official Staking Website
        </GreenTypography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box 
            component={"img"}
            src='/assets/images/ddawgs3.jpg'
            className='home_ddawgs'
          />
        </Box>
        <Box
          bgcolor={COLOR_GREEN}
          borderRadius={5}
          p={2}
          my={5}
        >
          <Grid container spacing={2} sx={{ alignItems: 'center' }} >
            <Grid item xs={12} md={3} sx={{ justifyContent: { xs: 'center' }, display: { xs: 'flex' } }} >
              <Box
                  component="img"
                  src='/assets/images/DDAWG9.jpg'
                  sx={{ border: '4px solid white', borderRadius: 5, width: { xs: '60%', md: '70%' } }}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <DescriptionTypography fontSize={{ xs: 18, md: 24 }} fontWeight={900} mb={1}>
                Saddle up for the wildest adventure this side of the Mississippi has to offer. Step into the Deputy Dawgs corral and become a Bonafide $DDawgs Wrangler today!
              </DescriptionTypography>
            </Grid>
          </Grid>
        </Box>
        
        <Box py={5}>
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }} >
              <Grid item xs={11.5} md={5.5} sx={{ bgcolor: 'white', borderRadius: 5 }} m={1} >
                <BrightBlueTypography
                    fontSize={22}
                    fontWeight={700}
                    textAlign={'center'}
                  >
                    DDAWGS Quick Info
                </BrightBlueTypography>
              </Grid>
              <Grid item xs={11.5} md={5.5} sx={{ bgcolor: 'white', borderRadius: 5 }} m={1} >
                <BrightBlueTypography
                    fontSize={{md: 18, xs: 14}}
                    fontWeight={700}
                    textAlign={'center'}
                  >
                    { tokenTotalSupply }
                </BrightBlueTypography>
                <Typography
                  fontSize={{md: 18, xs: 14}}
                  fontWeight={600}
                  textAlign={'center'}
                  color={'black'}
                  pt={3}
                >
                  Total Supply
                </Typography>
              </Grid>
              {/* <Grid item xs={5.5} md={3.5} sx={{ bgcolor: 'white', borderRadius: 5 }} m={1} >
                <BrightBlueTypography
                  fontSize={{md: 18, xs: 14}}
                  fontWeight={700}
                  textAlign={'center'}
                >
                  ~20
                </BrightBlueTypography>
                <Typography
                  fontSize={{md: 18, xs: 14}}
                  fontWeight={600}
                  textAlign={'center'}
                  color={'black'}
                  pt={3}
                >
                  Holders
                </Typography>
              </Grid> */}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}