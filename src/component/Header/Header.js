import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Avatar from '../Avatar/Avatar'

function Header() {
  return (
      <Grid container columns={2}>
        <Grid Header={8}>
          <Item><Logo /></Item>
        </Grid>
        <Grid flexGrow={1} Header={4}>
          <Item><SearchBar /></Item>
        </Grid>
        <Grid Header={8}>
          <Item><Avatar /></Item>
        </Grid>
      </Grid>
  );
}

export default Header;