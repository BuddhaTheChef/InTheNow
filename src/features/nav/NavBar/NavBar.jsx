import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedIn from '../Menus/SignedIn';
import SignedOut from '../Menus/SignedOut';
import { openModal } from '../../modals/modalActions';

const actions = {
  openModal
}

class NavBar extends Component {
  state= {
    authenticated: false
  }

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  }

  handleRegister = () => {
    this.props.openModal('RegisterModal')
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
     <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to='/' header>
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
        {authenticated ? <SignedIn signOut={this.handleSignOut} /> : <SignedOut signIn={this.handleSignIn} register={this.handleRegister} /> }
      </Container>
    </Menu>
   )
  }
}

export default withRouter(connect(null, actions)(NavBar));
