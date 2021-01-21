import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';

const HeaderMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Close</MenuItem>
        <Link href="/campaign" passHref>
          <MenuItem>Leveling Guide</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default HeaderMenu;
