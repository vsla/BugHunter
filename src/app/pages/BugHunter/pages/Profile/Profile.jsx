import React, { Component } from 'react';
import {
  Grid, withStyles, Button,
} from '@material-ui/core';

// Redux
import { connect } from 'react-redux';
import { SignOutBugHunter } from 'app/redux/authRedux/authActions';

import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';

const styles = (theme) => ({
  mainContainer: {
    height: '100%',
    paddingTop: 90,
  },

});

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { classes } = this.props;
    console.log(this.props);
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <DefaultContainer>
          <Grid container direction="column" className={classes.mainContainer}>

            <Button
              color="primary"
              size="large"
              onClick={() => {
                this.props.SignOutBugHunter()
              }}
            >
              Deslogar
            </Button>

          </Grid>
        </DefaultContainer>
      </Grid>
    );
  }
}
const mapStateToProps = (state) => ({
  authState: state,
});
export default withStyles(styles)(connect(mapStateToProps, { SignOutBugHunter })(Profile));
