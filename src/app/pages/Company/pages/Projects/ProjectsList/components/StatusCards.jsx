import {
 Grid, Paper, Typography
} from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
  root: {
    padding: 15,
    minWidth: 100,
  },
  badgeAtivos: {
    padding: '5px 9px 5px 9px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
  },
  badgeInativos: {
    padding: '5px 9px 5px 9px',
    borderRadius: '50%',
    backgroundColor: theme.palette.secondary.main,
  },
  number: {
    position: 'relative',
    color: 'white',
  },
});

class StatusCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: ['Ativos', 'Inativos'],
    };
  }

  renderCards = () => {
    const { classes } = this.props;
    const { cards } = this.state;
    return cards.map((name) => (
      <Grid item>
        <Paper className={classes.root}>
          <Grid container direction="row" justify="space-around" alignItems="center" spacing={2}>
            <Grid item>
              <Typography variant="body1">
                {name}
              </Typography>
            </Grid>
            <Grid item>
              <div className={classes[`badge${name}`]}><span className={classes.number}>4</span></div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.renderCards()}
      </Grid>
    );
  }
}
export default withStyles(styles)(StatusCard);
