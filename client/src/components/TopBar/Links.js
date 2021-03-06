/* Rendered in TopBar component which is connected to the redux store.
   Props: user - currently logged in user. Value derived from the redux store state as a result of loginData reducer operation.
          logUserOut - action dispatcher for logging out the current user.
          activePage - a prop provided by react-router-dom. this.props.location.pathname provides us with the path of the URL of the
          current route of the application. */

import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { withRouter } from "react-router-dom";

class Links extends Component {
  state = {
    showMenu: false
  };

  displayMenu() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    const { user, logUserOut, activePage } = this.props;

    return (
      <Main>
        <LinkDiv
          onClick={() => this.props.history.push("/")}
          name={"/feed"}
          active={activePage}
        >
          <i className="fas fa-home" />
          <LinkText>Home</LinkText>
        </LinkDiv>

        <LinkDiv
          onClick={() => this.props.history.push("/mynetwork")}
          name={"/mynetwork"}
          active={activePage}
        >
          <i className="fas fa-user-friends" />
          <LinkText>My Network</LinkText>
        </LinkDiv>

        <LinkDiv
          onClick={() => this.props.history.push("/mynetwork")}
          name={"/jobs"}
          active={activePage}
        >
          <i className="fas fa-briefcase" />
          <LinkText>Jobs</LinkText>
        </LinkDiv>

        <LinkDiv
          onClick={() => this.props.history.push("/mynetwork")}
          name={"/messaging"}
          active={activePage}
        >
          <i className="fas fa-comments" />
          <LinkText>Messaging</LinkText>
        </LinkDiv>

        <LinkDiv
          onClick={() => this.props.history.push("/mynetwork")}
          name={"/notifications"}
          active={activePage}
        >
          <i className="fas fa-bell" />
          <LinkText>Notifications</LinkText>
        </LinkDiv>

        <LinkMe
          onClick={this.displayMenu.bind(this)}
          ref={ClickMeRef => (this.ClickMeRef = ClickMeRef)}
        >
          <img src={user.avatar} alt="User avatar" />
          <LinkTextMe>
            Me <i className="fas fa-sort-down" />
          </LinkTextMe>
        </LinkMe>

        {this.state.showMenu && (
          <Menu
            user={user}
            hideMenu={this.hideMenu.bind(this)}
            ClickMeRef={this.ClickMeRef}
            logUserOut={logUserOut}
          />
        )}
      </Main>
    );
  }
}

export default withRouter(Links);

// CSS
const Main = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 48rem;
  border-right: 1px solid #5c6f7c;
  position: relative;

  @media only screen and (max-width: 580px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    height: 6.2rem;
    order: -1;
    padding: 0 2rem;
  }
`;

const LinkDiv = styled.div`
  height: 5.2rem;
  width: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${props => (props.active === props.name ? "white" : "#c7d1d8")};
  text-decoration: none;
  border-bottom: ${props =>
    props.active === props.name ? "3px solid white" : "none"};

  & i {
    font-size: 1.9rem;
    padding-top: 0.7rem;
    padding-bottom: 0.2rem;

    @media only screen and (max-width: 580px) {
      font-size: 3rem;
    }
  }

  &:hover {
    color: white;
  }

  &:visited {
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

  @media only screen and (max-width: 580px) {
    width: 16%;
  }
`;

const LinkText = styled.div`
  font-weight: 600;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const LinkMe = styled(LinkDiv)`
  justify-content: flex-start;
  border: none;

  & img {
    border: 0.03rem solid white;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    margin-top: 0.9rem;

    @media only screen and (max-width: 1024px) {
      margin-top: 1.5rem;
    }

    @media only screen and (max-width: 580px) {
      height: 3.6rem;
      width: 3.6rem;
      margin-top: 1rem;
    }
  }
`;

const LinkTextMe = styled(LinkText)`
  margin-top: 0.1rem;
  display: flex;
  align-items: center;

  & i {
    font-size: 1.1rem;
    padding: 0px 0px;
    padding-left: 4px;
  }
`;
