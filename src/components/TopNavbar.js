import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  styled,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';
import { Link as ScrollLink } from 'react-scroll';
import { TextButton } from '../utils/styledComponents';
import { COLOR_DARK, ROUTES } from '../utils/constants';
import { PrimaryButton } from '../utils/styledComponents';
import { ethers } from 'ethers'
import { useEthers } from '@usedapp/core';

const CustomizedDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #111;
  }
`;

export default function TopNavbar() {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        py: { md: 1 },
        borderBottom: `1px solid ${COLOR_DARK}`
      }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* For Mobile */}
          <IconButton
            size="large"
            sx={{ color: '#FFFFFF', ml: { xs: 2, md: 0 }, display: { xs: 'flex', md: 'none' } }}
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* For Mobile */}
          <CustomizedDrawer
            anchor="right"
            open={drawerOpened}
            onClose={() => setDrawerOpened(false)}
          >
            <Box my={3}>
              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button component={RouterLink} to="/">
                  <Box component="img" src="/assets/images/DeputyDawgs.png" width={150} />
                </Button>
              </Stack>
              <List sx={{ mt: 2 }} onClick={() => setDrawerOpened(false)}>
                {
                  ROUTES.map(route => (
                    <ListItem key={route.path}>
                      <ListItemButton
                        sx={{ color: grey[300] }}
                      >
                        <ScrollLink
                          to={route.path}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {route.name}
                        </ScrollLink>
                      </ListItemButton>
                    </ListItem>
                  ))
                }
              </List>
            </Box>
          </CustomizedDrawer>

          {/* Logo for desktop */}
          <Button component={RouterLink} to="/" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box component="img" src="/assets/images/DeputyDawgs.png" width={270} ml={1} />
          </Button>

          <Box flexGrow={1}>
            <Stack direction="row" justifyContent="center">
              {/* Logo for desktop */}
              <Button component={RouterLink} to="/" sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box component="img" src="/assets/images/DeputyDawgs.png" width={270} ml={1} />
              </Button>
            </Stack>
          </Box>
          {
            ROUTES.map(route => (
              <TextButton
                key={route.path}
                sx={{ mr: 1, fontWeight: 600, color: grey[300], display: { xs: 'none', md: 'flex' } }}
              >
                <ScrollLink
                  to={route.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {route.name}
                </ScrollLink>
              </TextButton>
            ))
          }
          <Box>
            {
              account ? 
                <PrimaryButton onClick={deactivate}>
                  {account.slice(0, 4)}...
                  {account.slice(38, 42)}
                </PrimaryButton>
              : 
                <PrimaryButton onClick={activateBrowserWallet} >
                  Connect Wallet
                </PrimaryButton>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}