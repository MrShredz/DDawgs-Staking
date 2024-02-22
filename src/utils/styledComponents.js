import {
  Button,
  Card,
  Dialog,
  Typography,
  LinearProgress,
  linearProgressClasses,
  Box,
  IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  COLOR_DARK,
  COLOR_BLUE,
  COLOR_GREEN,
  COLOR_BRIGHT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_BRIGHT_BLUE,
  COLOR_SUCCESS,
  FONT_PRIMARY,
  COLOR_WARNING,
  BORDER_RADIUS_TOP,
  BORDER_RADIUS_BOTTOM,
  BORDER_STYLE
} from './constants';
// import { Toys } from '@mui/icons-material';

export const PrimaryButton = styled(Button)`
  background-color: ${COLOR_GREEN};
  color: black;
  border-radius: 25px;
  text-transform: capitalize;
  font-family: ${FONT_PRIMARY};
  font-weight: 700;
  :hover {
    background-color: ${COLOR_PRIMARY};
  } 
`;

export const PrimaryIconButton = styled(IconButton)({
  backgroundColor: COLOR_PRIMARY,
  '&:hover': {
    backgroundColor: COLOR_PRIMARY
  }
});

export const PrimaryOutlinedButton = styled(Button)({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  color: COLOR_BRIGHT,
  borderRadius: 25,
  border: `2px solid ${COLOR_BLUE}`,
  textTransform: 'capitalize',
  fontFamily: FONT_PRIMARY,
  fontWeight: 700
});

export const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 25,
    bgColor: COLOR_PRIMARY
  }
});

export const TextButton = styled(Button)`
  text-transform: capitalize;
  font-family: ${FONT_PRIMARY};
`;

export const PrimaryTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_PRIMARY};
`;

export const DescriptionTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_BRIGHT};
`;

export const Divider = styled(Box)`
  border: ${BORDER_STYLE};
`;

export const SecondaryTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_SECONDARY};
`;

export const BrightBlueTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_GREEN};
`;

export const BrightGreenTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_GREEN};
`;

export const BorderRadiusTopTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_BLUE};
  border: ${BORDER_STYLE};
  border-radius: ${BORDER_RADIUS_TOP};
`;

export const BorderRadiusBottomTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_BLUE};
  border: ${BORDER_STYLE};
  border-radius: ${BORDER_RADIUS_BOTTOM};
`;

export const SuccessTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_SUCCESS};
`;

export const DarkTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_DARK}
`;

export const BrightTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_BRIGHT};
`;

export const GreenTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_GREEN};
`;

export const AboutTitleTypography = styled(Typography)`
  font-family: ${FONT_PRIMARY};
  color: ${COLOR_GREEN};
`;

  // color: ${COLOR_BRIGHT_BLUE};

export const DarkCard = styled(Card)`
  background: ${COLOR_DARK};
  border-radius: 25px;
`;

export const PrimaryCard = styled(Card)`
  background: ${COLOR_PRIMARY};
  border-radius: 25px;
`;

export const ContractAddressInputTypography = styled(Typography)`
  background: ${COLOR_DARK};
  color: #ffffff;
  fontWeight: 700;
  padding: 5px;
  alignItems: center;
  display: flex;
  height: 25px;
`;

export const SuccessLinearProgressbar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: COLOR_SECONDARY,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLOR_SUCCESS,
  },
});

export const WarningLinearProgressbar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: COLOR_SECONDARY,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: COLOR_WARNING,
  },
});