import React, { Component, Fragment } from "react";
import {
  Grid,
  withStyles,
  createStyles,
  Divider,
  Typography,
  CircularProgress
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import ProjectService from "app/services/ProjectService";

const styles = createStyles({
  paper: {
    maxHeight: "100%",
    width: "100%"
  },
  category: {
    padding: "5px 8px",
    border: "1px solid #47525E",
    borderRadius: 8
  },
  link: {
    display: "inline",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

class DashProjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    const response = await ProjectService.getAllProjects();
    this.setState({ projects: response.data });
    console.log(response);
  }

  renderProjects = () => {
    const { projects } = this.state;
    const { classes } = this.props;
    if (projects.length > 0) {
      return projects.map(({ name, description }) => (
        <>
          <ListItem>
            <Grid container spacing={1} style={{ paddingTop: 5 }}>
              <Grid item xs={12}>
                <Link to="#">
                  <Typography
                    className={classes.link}
                    variant="h3"
                    color="primary"
                  >
                    {name}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography>{description}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container direction="row" alignItems="center" spacing={4}>
                  <Grid item>
                    <Typography>R$ 2.0X</Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.category}>
                      Desktop
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
        </>
      ));
    } else {
      return (
        <Grid container justify='center'>
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      );
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        className={classes.paper}
        aria-label="main mailbox folders"
      >
        {this.renderProjects()}
      </List>
    );
  }
}
export default withStyles(styles)(DashProjects);
