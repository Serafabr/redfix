import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input
} from "reactstrap";

import {
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";

import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";
import { logoutSuccess } from "../../redux/actions";
import { connect } from "react-redux";
import logoutFetch from "../../utils/authentication/logoutFetch";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.handleSession = this.handleSession.bind(this);
    this.handleDropdownClick = this.handleDropdownClick.bind(this);
    this.state = {
      dropdownOpen: false,
      email: window.localStorage.getItem('session'),
    }
  }

  componentDidUpdate = prevProps => {
    if(this.props.email !== prevProps.email){
      this.setState({
        email: this.props.email
      });
    }
  }

  handleSession() {
    this.setState({
      email: window.localStorage.getItem('session')
    });
  }

  handleProfile(event) {
    this.props.history.push('/perfil');
  }

  handleLogout(event) {
    logoutFetch()
      .then(() => {
        this.setState({
          email: null,
        });
        window.localStorage.removeItem('session');
        window.localStorage.setItem('logout-event', 'logout' + Math.random());
        this.props.dispatch(logoutSuccess());
        this.props.history.push('/login');
      })
      .catch(() => {
        alert('Logout falhou. Tente novamente.')
      });
  }

  handleDropdownClick(event) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    
    window.addEventListener('storage', event => {
      if (event.key === 'session') { 
        this.handleSession();
      }
    });
    
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, height: 35, alt: "Senado Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "Senado Logo" }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none ml-auto" navbar>
          {this.state.email === null ? (
            <React.Fragment>
              <NavItem className="px-3">
                <Input type="select" name="select" id="exampleSelect" style={{ width: "200px" }}>
                  <option>Ordens de Serviço</option>
                  <option>Equipamentos</option>
                  <option>Edifícios</option>
                  <option>Contratos</option>
                </Input>
              </NavItem>
              <NavItem className="px-3">
                <Input type="text" name="search" id="search" placeholder="Buscar ..."/>
              </NavItem>
              {/* <NavItem className="px-3">
                <Link to="/cadastro" className="nav-link">
                  Cadastro
                </Link>
              </NavItem> */}
              <NavItem className="px-3">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </NavItem>
            </React.Fragment>
          ) : (
            <Dropdown
              direction="down"
              toggle={this.handleDropdownClick}
              isOpen={this.state.dropdownOpen}
            >
              <DropdownToggle nav className="px-3">
                  <i className="fa fa-user-circle" />
                  {" " + this.state.email}
              </DropdownToggle>
              <DropdownMenu right style={{ right: 'auto' }}>
                  {/* <DropdownItem onClick={this.handleProfile}><i className="fa fa-user"></i>Perfil</DropdownItem> */}
                  {/* <DropdownItem><i className="fa fa-wrench"></i>Configurações</DropdownItem> */}
                  <DropdownItem onClick={this.handleLogout}><i className="fa fa-lock"></i> Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </Nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = storeState => {
  let email = storeState.auth.email;
  return {
    email: email
  }
}

export default connect(mapStateToProps)(withRouter(MainHeader));