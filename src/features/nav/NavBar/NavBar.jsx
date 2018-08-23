import React, {Component} from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
     <Menu inverted="inverted" fixed="top">
      <Container>
        <Menu.Item header="header">
          <img src="assets/logo.png" alt="logo"/>
          EventNow
        </Menu.Item>
        <Menu.Item name="Events"/>
        <Menu.Item>
          <Button floated="right" positive="positive" inverted="inverted" content="Create Event"/>
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic="basic" inverted="inverted" content="Login"/>
          <Button basic="basic" inverted="inverted" content="Sign Out" style={{
              marginLeft: '0.5em'
            }}/>
        </Menu.Item>
      </Container>
    </Menu>
   )
  }
}

export default NavBar;
