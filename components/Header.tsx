import React from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

import HeaderMenu from './HeaderMenu';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <HeaderMenu />
      <Link href="/" passHref>
        <IconButton edge="start" aria-label="home">
          <HomeIcon />
        </IconButton>
      </Link>
      <Typography>PoE Pocket Guide</Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
