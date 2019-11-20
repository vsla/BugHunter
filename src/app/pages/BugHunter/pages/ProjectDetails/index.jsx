import React, { Component } from 'react';
import { Grid, withStyles, Select, TextField, Typography, CircularProgress } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Header from '../../components/Header';
import DefaultContainer from '../../components/DefaultContainer';
import ProjectDetails from './ProjectDetails';
import BugsList from './Bugs';
import ProjectService from 'app/services/ProjectService';

const styles = theme => ({
  mainContainer: {
    height: '100%',
    paddingTop: 90
  },
  centerContent: {
    flexGrow: 1,
    height: '100%',
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: '40px 20px'
  },
  tabs: {
    borderBottom: '1px solid gray'
  }
});

class DashboardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      id: this.props.match.params.id,
      value: 0,
      project: {},
      loading: true
    };
  }

 
  componentDidMount(){
    this.getProjectInformation()
  }

  getProjectInformation = async () => {
    const { id, loading} = this.state;
    const response = await ProjectService.getProject(id)
    if (!response.error) {
      this.setState({ loading: false, project: response.data })
    }
  }

  render() {
    const { classes } = this.props;
    const { value, project, loading} = this.state;
    return (
      <Grid container style={{ height: '100%' }} direction="column">
        <Header />
        <DefaultContainer>
          <Grid container justify="center" className={classes.mainContainer}>

            {
              !loading ? (
                <Grid item className={classes.centerContent}>
                  <Grid container className={classes.tabs}>

                    <Grid item xs={9}>
                      <Tabs
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, newValue) => {
                          this.setState({ value: newValue });
                        }}
                      >
                        <Tab label="Descrição" />
                        <Tab label="Bugs" />
                      </Tabs>
                    </Grid>
                  </Grid>

                  {value === 0 ? <ProjectDetails project={project}/> : <BugsList project={project} />}
                </Grid>
              ) : (
                  <CircularProgress/>
                )
            }


          </Grid>
        </DefaultContainer>
      </Grid>
    );
  }
}

export default withStyles(styles)(DashboardDetails);
