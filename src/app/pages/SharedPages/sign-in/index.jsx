import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { BugReport } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
  loginRoot: {
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        justify="center"
        style={{ paddingLeft: 10, paddingRight: 10, height: '100%' }}
      >
        <Grid item className={classes.loginRoot}>
          <Grid container spacing={2} style={{ maxWidth: 444 }}>
            <Grid item style={{ width: '100%' }}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Avatar>
                    <BugReport />
                  </Avatar>
                </Grid>
                <Grid item>
                  <Typography component="h1" variant="h5" color="primary">
                    Entrar no sistema
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <form className={classes.form} noValidate>
                <Grid container direction="column" spacing={2}>
                  <Grid item style={{ width: '100%' }}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <FormControlLabel
                      style={{ fontSize: '15px' }}
                      control={<Checkbox value="remember" color="primary" />}
                      label="Lembre"
                    />
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Entrar
                    </Button>
                  </Grid>
                  <Grid item style={{ width: '100%' }}>
                    <Grid container>
                      <Grid item xs>
                        <Link href="/" variant="body2">
                          Esqueceu a senha?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/" variant="body2" color="primary">
                          Cadastre-se
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item style={{ width: '100%' }}>
              <Typography variant="body2" color="textSecondary" align="center">
                Copyright © 
                <Link color="inherit" href="/">
                  BugHuntera
                </Link> 
                {new Date().getFullYear()}
                .
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(SignIn);
