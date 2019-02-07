/* Rendered in App component with path "/start/profile". Connected to the redux store.
   Dispatches an action updateUserJob which takes in user data delivered from the local state of the component. */

import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Actions
import { updateUserJob } from "./LoginReducer/Login.actions";

class LoginStage2 extends Component {
  state = {
    job_title: "",
    company_name: "",
    industry: "",
    showIndustry: false
  };

  handleInputChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: target });
  };

  showIndustry = () => {
    this.setState({ showIndustry: true });
  };

  finishStage = () => {
    const userData = this.state;
    userData.id = this.props.loginData.user._id;
    delete userData.showIndustry;
    this.props.updateUserJob(userData);
  };

  render() {
    const { userJobUpdated } = this.props.loginData;

    return (
      <Wrapper>
        {userJobUpdated && this.props.history.push("/start/photo")}

        <ProgressDiv>
          <ProgressPoint>
            <ProgressPointCircle status={"done"} />
            <ProgressText status={"done"}>Location</ProgressText>
          </ProgressPoint>
          <ProgressPoint>
            <ProgressPointCircle status={"progress"} />
            <ProgressText status={"progress"}>Job Info</ProgressText>
            <ProgressLine status={"done"} />
          </ProgressPoint>
          <ProgressPoint>
            <ProgressPointCircle status={"no"} />
            <ProgressText status={"no"}>Avatar</ProgressText>
            <ProgressLine status={"no"} />
          </ProgressPoint>
        </ProgressDiv>

        <Main>
          <Text>
            Your profile helps you discover the right people and opportunities
          </Text>

          <InfoDescription>Most recent job title *</InfoDescription>
          <Input name="job_title" onChange={this.handleInputChange} />

          <InfoDescription>Most recent company *</InfoDescription>
          <Input
            name="company_name"
            onChange={this.handleInputChange}
            onClick={this.showIndustry}
          />

          <IndustryDes show={this.state.showIndustry}>Industry *</IndustryDes>
          <IndustryInput
            show={this.state.showIndustry}
            name="industry"
            placeholder="Select Industry"
            onChange={this.handleInputChange}
          />

          <StudentButton onClick={this.finishStage}>
            I'm a student
          </StudentButton>
          <Button onClick={this.finishStage}>Continue</Button>
        </Main>
      </Wrapper>
    );
  }
}

// Redux
function mapStateToProps(state) {
  const { loginData } = state;

  return {
    loginData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    updateUserJob: userData => dispatch(updateUserJob(userData))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginStage2);

// CSS
const Wrapper = styled.div`
  width: 100%;
  height: 62.4rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 580px) {
    height: 100vh;
  }
`;
const Main = styled.div`
  width: 74rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(0, 0, 0, 0.6);
`;
const Text = styled.div`
  color: black;
  font-size: 3rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;
const InfoDescription = styled.div`
  display: flex;
  font-size: 1.6rem;
  width: 40rem;
  height: 1.6rem;
  margin: 1rem 0;
`;
const Input = styled.input`
  width: 39rem;
  height: 3.5rem;
  border: 1px solid black;
  padding-left: 1rem;
`;
const Button = styled.button`
  border: none;
  width: 40rem;
  height: 4.2rem;
  color: white;
  background-color: #0073b1;
  font-size: 2rem;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #006097;
  }
`;
const StudentButton = styled(Button)`
  background-color: transparent;
  color: #0073b1;
  &:hover {
    background-color: rgba(152, 216, 244, 0.25);
    color: #006097;
  }
`;
const IndustryDes = styled(InfoDescription)`
  display: ${props => (props.show ? "flex" : "none")};
`;
const IndustryInput = styled(Input)`
  display: ${props => (props.show ? "flex" : "none")};
`;
const ProgressDiv = styled.div`
  display: flex;
  margin-top: 8rem;
`;
const ProgressPoint = styled.div`
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: normal;
  position: relative;
`;
const ProgressText = styled.span`
  width: 6.5rem;
  text-align: center;
  color: ${props =>
    props.status === "done"
      ? "black"
      : props.status === "progress"
      ? "black"
      : "rgba(0,0,0, 0.6)"};
`;
const ProgressPointCircle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${props =>
    props.status === "done"
      ? "#0073b1"
      : props.status === "progress"
      ? "transparent"
      : "transparent"};
  border: 0.1rem solid
    ${props =>
      props.status === "done"
        ? "#0073b1"
        : props.status === "progress"
        ? "#0073b1"
        : "rgba(0,0,0, 0.6)"};
`;
const ProgressLine = styled.div`
  height: 0.2rem;
  width: 5rem;
  background-color: ${props =>
    props.status === "done" ? "black" : "rgba(0,0,0, 0.2)"};
  border-radius: 0.2rem;
  position: absolute;
  top: 0.5rem;
  left: -2.6rem;
`;
