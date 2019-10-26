import React, { Component, Fragment } from 'react';
import {
  Grid, withStyles, createStyles, Divider, Typography,
} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const styles = createStyles({
  paper: {
    maxHeight: '100%',
    width: '100%',
  },
  category: {
    padding: '5px 8px',
    border: '1px solid #47525E',
    borderRadius: 8,
  },
  link: {
    display: 'inline',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
});

class DashProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [1, 2, 3, 4, 5, 6, 7, 8, 9],

    };
  }


  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    return (
      <List component="nav" className={classes.paper} aria-label="main mailbox folders">
        {
          projects.map(() => (
            <>
              <ListItem>
                <Grid container spacing={1} style={{ paddingTop: 5 }}>
                  <Grid item xs={12}>
                    <Link to="#" >
                      <Typography className={classes.link} variant="h3" color="primary">Título do projeto</Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus posuere purus sed metus
                      eleifend elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="row" alignItems="center" spacing={4}>
                      <Grid item>
                        <Typography>R$ 2.0X</Typography>
                      </Grid>
                      <Grid item>
                        <Typography className={classes.category}>Desktop</Typography>
                      </Grid>
                    </Grid>

                  </Grid>
                </Grid>
              </ListItem>
              <Divider />
            </>
          ))
        }
      </List>
    );
  }
}
export default withStyles(styles)(DashProjects);
