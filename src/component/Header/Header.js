function Header() {
  return (
      <Grid container columns={2}>
        <Grid Header={8}>
          <Item><Header /></Item>
        </Grid>
        <Grid flexGrow={1} Header={4}>
          <Item>Header</Item>
        </Grid>
      </Grid>
  );
}

export default Header;