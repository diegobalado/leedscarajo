import React from 'react';
import { Link } from 'react-router-dom';
import { Header as BaseHeader, Nav, Anchor } from 'grommet';

const Header = () => <BaseHeader pad="medium">
  <Nav direction="row" >
    <Anchor as={Link} to="/" label="Positions" />
    <Anchor as={Link} to="/fixture" label="Fixture" />
  </Nav>
</BaseHeader>

export default Header;