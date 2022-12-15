import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

// import { Container } from './styles';

function Main() {
  return <div style={{display: 'flex', alignItems: 'center', marginTop: 20, gap: 10}}>
        <Link to='/create'><Button>Create</Button></Link>
        <Link to='/read'><Button>Read</Button></Link>
        <Link to='/update'><Button>Update</Button></Link>
    </div>;
}

export default Main;