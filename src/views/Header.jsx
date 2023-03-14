import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import TemporaryDrawer from './Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
