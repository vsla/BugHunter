import React, { Component, Fragment } from "react";
import {
  Grid,
  withStyles,
  createStyles,
  Divider,
  Typography,
  CircularProgress,
  Button
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import ProjectService from "app/services/ProjectService";

import sadface from 'app/assets/sadface.png';


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
      projects: [],
      loading: true
    };
  }

  async componentDidMount() {
    this.getProjects()
  }

  getProjects = async ()=> {
    this.setState({loading: true})
    const response = await ProjectService.getAllProjects();
    this.setState({ projects: response.data, loading: false });
    console.log(response);
  }

  renderProjects = () => {
    const { projects, loading } = this.state;
    console.log(projects)
    const { classes } = this.props;
    if (!loading){
      if (projects.length > 0) {
        return projects.map(({ name, description, category, id }) => (
          <>
            <ListItem>
              <Grid container spacing={1} style={{ paddingTop: 5 }}>
                <Grid item xs={12}>
                  <Link to={"/bughunter/projetos/" + id}>
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
                        {category}
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
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            spacing={4}
            style={{ flexGrow: 1 }}
          >
            <Grid item>
              <img src={sadface} alt="sad face" height={100} />
            </Grid>
            <Grid item>
              <Typography> Não tem nenhum projeto </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={() => this.getProjects()}>
                  Recarregar
              </Button>
            </Grid>
          </Grid>
        )
      }
    }
     else {
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
