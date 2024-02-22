import React from 'react';
import {
  Box,
  Stack,
} from '@mui/material';
import { BrightTypography } from '../utils/styledComponents';

export default function Footer() {
  return (
    <Box
      sx={{ borderTop: '3px solid #49c2ff' }}
    >
      <Stack bgcolor="#131313" py={3} justifyContent="center" alignItems="center" spacing={2}>
        <BrightTypography textAlign="center" fontSize={{ xs: 14, md: 16 }} fontWeight={700} >
          Copyright © {new Date().getFullYear()} Deputy Dawgs
        </BrightTypography>
      </Stack>
    </Box>
  );
}