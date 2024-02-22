import React from 'react';
import {
    Stack,
    Dialog as MuiDialog,
    DialogContent,
    DialogTitle as MuiDialogTitle,
    useMediaQuery,
    styled,
    IconButton,
    Box,
    Container
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { 
    BrightBlueTypography, 
    Divider,
    BrightTypography
} from '../../utils/styledComponents'
import CloseIcon from '@mui/icons-material/Close';
import useExchangeToToken from '../../hooks/useExchangeToToken';

/*----------------------------------------------------------------------------------------- */

const TokenData = [
    {
        Name: 'Bitcoin',
        Symbol: 'BTC',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    },
    {
        Name: 'BNB',
        Symbol: 'BNB',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    },
    {
        Name: 'Ethereum Token',
        Symbol: 'ETH',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    },
    {
        Name: 'Polygon token',
        Symbol: 'Matic',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png'
    },
    {
        Name: 'Tether USD',
        Symbol: 'USDT',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
    },
    {
        Name: 'USDC Coin',
        Symbol: 'USDC',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png'
    },
    {
        Name: 'TRON',
        Symbol: 'TRX',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png'
    },
    {
        Name: 'Binance USD',
        Symbol: 'BUSD',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png'
    },
    {
        Name: 'Fantom',
        Symbol: 'FTM',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png'
    }
]

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: '#813b08',
        borderRadius: 20,
        border: '2px solid #61c97d'
    }
}));

const DialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    return (
        <MuiDialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
};

/* ---------------------------------------------------------------------------------------- */

export default function ExchangeToTokenModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { modalIsOpened, closeExchangeToTokenModal } = useExchangeToToken()

    const SelectedToToken = () => {
        closeExchangeToTokenModal()
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeExchangeToTokenModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeExchangeToTokenModal}>
                <BrightBlueTypography fontSize={22} fontWeight={700} textTransform="uppercase">
                    Select To Token
                </BrightBlueTypography>
            </DialogTitle>

            <Divider m={1} />

            <DialogContent>
                <Container>
                    <Stack>
                        <Box>
                            <input 
                                type='text' 
                                placeholder='Search name or paste address' 
                                style={{
                                    fontSize: 20,
                                    borderRadius: 5,
                                    border: 'none',
                                    padding: 5,
                                    width: '100%',
                                    fontWeight: 600,
                                    fontFamily: 'Noto Sans',
                                }}
                            />
                        </Box>
                        <Box>
                            {
                                TokenData.map((item, index)=> (
                                    <Box
                                        sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', cursor: 'pointer' }}
                                        key={item}
                                        m={1}
                                        onClick={SelectedToToken}
                                    >
                                        <Box
                                            component="img"
                                            src={item.TokenLogo}
                                            alt={item.Symbol}
                                            width={'40px'}
                                            mr={1}
                                        />
                                        <Box>
                                            <BrightBlueTypography
                                                fontSize={18}
                                                fontWeight={900}
                                            >
                                                {item.Symbol}
                                            </BrightBlueTypography>
                                            <BrightTypography
                                                fontSize={16}
                                                fontWeight={600}
                                            >
                                                {item.Name}
                                            </BrightTypography>
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Stack>
                </Container>
            </DialogContent>
        </Dialog>

    );
}