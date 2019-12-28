// tslint:disable-next-line:variable-name
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

// tslint:disable-next-line:variable-name
const Navigation: React.FC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Git History</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
