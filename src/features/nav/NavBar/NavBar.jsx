import React, {Component} from 'react';
import {Menu, Container, Button} from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedIn from '../Menus/SignedIn';
import SignedOut from '../Menus/SignedOut';

class NavBar extends Component {
  state= {
    authenticated: false
  }

  handleSignIn = () => {
    this.setState({
      authenticated: true
    })
  }

  handleSignOut = () => {
    this.setState({
      authenticated: false
    })
    this.props.history.push('/')
  }

  render() {
    const {authenticated} = this.state;
    return (
     <Menu inverted="inverted" fixed="top">
      <Container>
        <Menu.Item as={Link} to='/' header="header">
          <img src="/assets/logo.png" alt="logo"/>
          EventNow
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name="Events"/>
        <Menu.Item as={NavLink} to='/test' name="Test"/>
        {authenticated &&
        <Menu.Item as={NavLink} to='/people' name="People"/>}
        {authenticated &&
        <Menu.Item>
          <Button as={Link}  to='/createEvent' floated="right" positive inverted content="Create Event"/>
        </Menu.Item>}
        <Menu.Item position="right">
          <Button basic="basic" inverted="inverted" content="Login"/>
          <Button basic="basic" inverted="inverted" content="Sign Out" style={{
              marginLeft: '0.5em'
            }}/>
        </Menu.Item>
        {authenticated ? <SignedIn signOut={this.handleSignOut} /> : <SignedOut signIn={this.handleSignIn} /> }
      </Container>
    </Menu>
   )
  }
}

export default withRouter(NavBar);
