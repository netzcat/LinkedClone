import React, { Component } from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import Community from './Community'

class LeftRail extends Component {

    render() {
        return (
            <Main>
               <Profile />
               <Community />
            </Main>
        )
    }
}

export default LeftRail;

// CSS
const Main = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-top: 5.2rem;
background-color: #f5f5f5;
position: relative;

@media only screen and (max-width: 580px) {
    display: none;
}
`