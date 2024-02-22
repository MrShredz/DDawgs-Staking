import React from 'react';
import { Box, Container } from '@mui/material';
import { COLOR_DARK_BLACK } from '../../utils/constants';
import {
  AboutTitleTypography,
  BrightTypography,
  SecondaryTypography,
  BrightBlueTypography,
  Divider,
} from '../../utils/styledComponents';
import BuyFromTokenModal from '../../components/BuyFromTokenModal';
import BuyToTokenModal from '../../components/BuyToTokenModal';
import useBuyFromToken from '../../hooks/useBuyFromToken';
import useBuyToToken from '../../hooks/useBuyToToken';

export default function BuyDDawgsSection() {

  const { openBuyFromTokenModal } = useBuyFromToken();
  const { openBuyToTokenModal } = useBuyToToken();

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
            Buy DDawgs
          </SecondaryTypography>
        </Box>
        <Box
          position="relative"
          width="100%"
          zIndex={20}
          pt={{ xs: 8, mt: 12 }}
          id="buy-ddawgs"
        >
          <AboutTitleTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center" sx={{ cursor: 'pointer' }}>
            Buy DDawgs
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
                DDawgs Exchange
            </BrightBlueTypography>
            <BrightTypography
                fontSize={{ xs: 16, md: 20 }}
                fontWeight={600}
                px={2}
            >
                Trade tokens in an instant
            </BrightTypography>

            <Divider m={1} />

            <Box
              px={4}
              py={2}
            >
                <BrightBlueTypography
                    fontSize={20}
                    fontWeight={600}
                    p={2}
                >
                    From
                </BrightBlueTypography>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    width={'90%'}
                    margin={'auto'}
                >
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                        width={'100%'}
                    >
                        <Box
                            width={'75%'}
                            m={1}
                        >
                            <input 
                                placeholder='0.0'
                                style={{
                                fontSize: 22,
                                padding: '10px',
                                borderRadius: 10,
                                width: '95%',
                                fontWeight: 700,
                                fontFamily: 'Noto Sans',
                                }}
                            />
                        </Box>
                        <Box
                            width={'20%'}
                            m={1}
                        >
                            <BrightTypography onClick={openBuyFromTokenModal} sx={{ cursor: 'pointer', fontSize: 20, fontWeight: 700 }} >
                                Select Token
                            </BrightTypography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
              px={4}
              py={2}
            >
                <BrightBlueTypography
                    fontSize={20}
                    fontWeight={600}
                    p={2}
                >
                    To
                </BrightBlueTypography>
                <Box
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    width={'90%'}
                    margin={'auto'}
                >
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}
                        width={'100%'}
                    >
                        <Box
                            width={'75%'}
                            m={1}
                        >
                            <input 
                                placeholder='0.0'
                                style={{
                                fontSize: 22,
                                padding: '10px',
                                borderRadius: 10,
                                width: '95%',
                                fontWeight: 700,
                                fontFamily: 'Noto Sans',
                                }}
                            />
                        </Box>
                        <Box
                            width={'20%'}
                            m={1}
                        >
                            <BrightTypography onClick={openBuyToTokenModal} sx={{ cursor: 'pointer', fontSize: 20, fontWeight: 700 }} >
                                Select Token
                            </BrightTypography>
                        </Box>
                    </Box>
                </Box>
            </Box>

          </Box>
        </Container>
      </Box>
      <BuyFromTokenModal />
      <BuyToTokenModal />
    </Box>
  );
}