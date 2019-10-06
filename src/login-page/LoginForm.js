import React, { Component } from "react";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import { Grid, Form, Button } from "semantic-ui-react";
import axios from "axios";

// import  SignUpModal from "./SignUpModal";

const url = "https://nameless-harbor-36131.herokuapp.com";

class LoginForm extends Component {
  // heroku url 

  onFormSubmit = async values => {
    try {
      const response = await axios.post(`${url}/login`,values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={this.onFormSubmit}
      >
        {({ handleSubmit, values, handleChange, handleReset }) => {
          return (
            <Form>
              <Grid textAlign="center">
                <Grid.Row>
                  <Grid.Column width={3} />
                  <Grid.Column width={10}>
                    <br />
                    <Form.Input
                      fluid
                      name="username"
                      label="Username"
                      value={values.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                    />
                  </Grid.Column>
                  <Grid.Column width={3} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3} />
                  <Grid.Column width={10}>
                    <Form.Input
                      fluid
                      type="password"
                      name="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                    />
                  </Grid.Column>
                  <Grid.Column width={3} />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      primary
                      content="Sign in"
                      type="submit"
                      onClick={handleSubmit}
                      icon="sign-in"
                      labelPosition="left"
                    />
                    <Button
                      content="Reset"
                      onClick={handleReset}
                      negative
                      icon="refresh"
                      labelPosition="left"
                    />
                  </Grid.Column>
                </Grid.Row>
                {/* <Grid.Row>
                  <Grid.Column>
                  <SignUpModal addUser={props.addUser}/>
                   </Grid.Column>
                  </Grid.Row> */}
              </Grid>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default withRouter(LoginForm);
