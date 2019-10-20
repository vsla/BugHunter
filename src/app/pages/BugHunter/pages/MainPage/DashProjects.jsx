import React, { Component } from 'react';
import { Paper, withStyles, createStyles } from '@material-ui/core';


const styles = createStyles({
  paper: {
    padding: '20px 20px',
    height: '100%',
  },
});

class DashProjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [1, 2, 3]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper elevation='5' className={classes.paper}>
        oi
      </Paper>
    )
  }
}
export default withStyles(styles)(DashProjects)
