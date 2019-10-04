import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom'

import {
  Button, Grid, Typography, Badge, IconButton,
} from '@material-ui/core';
import { BugReport, DeleteIcon, Edit, CodeSharp } from '@material-ui/icons';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  projectsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 0,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  link:{
    textDecoration: 'none'
  }
});

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props
    this.state = {
      projects: data,
    };
  }

  renderProjects = () => {
    const { projects } = this.state;
    const { classes } = this.props;
    return projects.map((project) => (
      <ListItem divider className={classes.projectsContainer}>
        <Grid container direction="row">
          <Grid item xs={8}>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h5" color="primary">
                      {project.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2">
                     {project.description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <IconButton>
                  <Badge badgeContent={4} color="primary">
                    <BugReport height={22} />
                  </Badge>
                </IconButton>
              </Grid>

            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item>
                <Button variant="contained" color="secondary" className={classes.button}>
                  Edit
                  <Edit className={classes.rightIcon} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    ));
  }

  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.root} aria-label="mailbox folders">
        <ListItem>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/empresa/projetos/novo' className={classes.link}>
                <Button variant="contained" color="primary">
                  Novo Projeto
                </Button>
              </Link>
            </Grid>
          </Grid>
        </ListItem>
        <Divider />
        {this.renderProjects()}
      </List>
    );
  }
}

export default withStyles(useStyles)(ProjectList);