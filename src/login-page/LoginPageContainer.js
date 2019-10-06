import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import LoginForm from "./LoginForm";

const styles = {
  formBackground: {
    backgroundColor: "white",
    paddingRight: "0px !important",
    color: "black",
    margin: "100px auto",
    paddingBottom: "50px"
  },
  appTitle: {
    paddingTop: "5vh",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    letterSpacing: "2px"
  },
  coverImagePadding: {
    paddingRight: "0px",
    borderRight: "solid 1px white"
  }
};

class LoginPageContainer extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column
            width={6}
            textAlign="center"
            style={styles.formBackground}
          >
            <h2 style={styles.appTitle}> M3 Controls Inventory </h2>
            <div style={styles.formLayout}>
              <LoginForm /> 
            </div>
          </Grid.Column>
          <Grid.Column width={5} /> 
        </Grid.Row>
        {/* <NotificationComponent error={error} loading={loading} data={addedUser} resetState={this.props.resetAddedUser}/> */}
      </Grid>
    );
  }
}

export default LoginPageContainer;
