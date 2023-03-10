import * as React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Logo from "../Logo/Logo";
// import SearchBar from "../SearchBar/SearchBar";
import Avatar from "../Avatar/Avatar";

import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Grid className="header" container columns={2}>
      <Grid header={8}>
        <Item>
          <Logo />
        </Item>
      </Grid>
      <Grid flexGrow={1} header={4}>
        {/* <Item><SearchBar /></Item> */}
        <Item>
          <Link className="link" to={`/users`}>
            users
          </Link>
          <Link className="link" to={`/posts`}>
            posts
          </Link>
        </Item>
      </Grid>
      <Grid header={8}>
        <Item>
          <Avatar />
        </Item>
      </Grid>
    </Grid>
  );
}

export default Header;
