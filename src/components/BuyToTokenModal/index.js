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
import useBuyToToken from '../../hooks/useBuyToToken';

/*----------------------------------------------------------------------------------------- */

const TokenData = [
    {
        Name: 'Deputy Dawgs',
        Symbol: 'DDawgs',
        TokenLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    }
]

/* ---------------------------------------------------------------------------------------- */

const Dialog = styled(MuiDialog)(({ theme }) => ({
    '& .MuiPaper-root': {
        background: '#000000',
        borderRadius: 20,
        border: '2px solid #49c2ff'
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

export default function BuyToTokenModal() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { modalIsOpened, closeBuyToTokenModal } = useBuyToToken();

    const selectedFromToken = () => {
        closeBuyToTokenModal();
    }

    return (
        <Dialog
            fullScreen={fullScreen}
            open={modalIsOpened}
            onClose={closeBuyToTokenModal}
            aria-labelledby="responsive-dialog-title"
            fullWidth={true}
            maxWidth="sm"
        >
            <DialogTitle id="responsive-dialog-title" onClose={closeBuyToTokenModal}>
                <BrightBlueTypography fontSize={22} fontWeight={700} textTransform="uppercase">
                    Select From Token
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
                                        onClick={selectedFromToken}
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