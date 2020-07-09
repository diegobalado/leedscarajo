import React from 'react';
import { Link } from 'react-router-dom';
import { Header as BaseHeader, Nav, Button } from 'grommet';
import { clearLocalStorage } from '../../../utils/helpers';



const Header = () => <BaseHeader pad="medium">
  <Nav direction="row" >
    <Link to={`${process.env.PUBLIC_URL}/home`}>Home</Link>
    <Link to={`${process.env.PUBLIC_URL}/positions`}>Positions</Link>
    <Link to={`${process.env.PUBLIC_URL}/fixture`}>Fixture</Link>
    <Link to={`${process.env.PUBLIC_URL}/bettings`}>Bettings</Link>
    <Button onClick={clearLocalStorage} label="Clear local data" size="small" />
  </Nav>
</BaseHeader>;

export default Header;