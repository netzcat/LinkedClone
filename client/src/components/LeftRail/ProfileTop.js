import React, { Component } from 'react';
import styled from 'styled-components';
import BG from "../../img/leftrail_profile_bg.png"
import {Link} from 'react-router-dom'

class ProfileTop extends Component {

    render() {

        const {first_name, last_name, job_title, avatar, _id} = this.props
        
        return (
            
            <Top>
                <Link to={`/user/${_id}`}> 
                    <ImgDiv>
                        <img src={avatar} alt=""/>
                    </ImgDiv>
                </Link>
                <Link to={`/user/${_id}`} style={{textDecoration: 'none'}}> 
                    <UserName>{`${first_name} ${last_name}`}</UserName>
                </Link>
                <UserTitle>{job_title}</UserTitle>
            </Top>
        )
    }
}

export default ProfileTop;

// CSS
const Top = styled.div`
border-bottom: 0.5px solid #d9d9d9;
height: 16.4rem;
width: 21.6rem;
background-image: url("${BG}");
background-size: 21.6rem 5.3rem;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

const ImgDiv = styled.div`
width: 7rem;
height: 7rem;
margin-top: 1.5rem;


& img {
    width: 6.8rem;
    height: 6.8rem;
    border-radius: 50%;
    border: 2px solid white;
}
`

const UserName = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.6rem;
font-weight: 600;
color: black;
text-decoration: none;
margin-top: 2.1rem;
`

const UserTitle = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 0.5rem;
font-weight: normal;
font-size: 1.2rem;
color: #929292;
`