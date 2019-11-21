import React from 'react';

import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

import logo from '../../../assets/HunterLogo.png';

// Services
import BughunterService from 'app/services/BughunterService'
import CompanyService from 'app/services/CompanyService'
import AdminService from 'app/services/AdminService'

import { SignInBugHunter, SignInCompany, SignInAdmin } from 'app/redux/authRedux/authActions';

import PropTypes from "prop-types";

// Router
import { Redirect } from 'react-router-dom'

// FormHelpers
import { Formik } from "formik";
import * as yup from "yup";

// SnackBar
import MessageBar from "app/components/MessageBar";

const useStyles = () => ({
  loginRoot: {
    display: 'flex',
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const schema = yup.object().shape({
  email: yup.string().email('Digite um email válido').required("Digite um email"),
  password: yup
    .string()
    .min(8, 'A senha precisa ter no mínimo 8 caracteres')
    .required('Senha é obrigatória'),
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props.location;
    this.state = {
      openSnackBar: false,
      logged: false,
      type: pathname === '/empresa/login' ? 'company' : 'bughunter',
    };
  }

  login = async (values) => {
    const { type } = this.state
    console.log(type)
    if (type === 'bughunter') {
      const response = await BughunterService.authBughunter(values)
      console.log(response)
      if (!response.error) {
        this.props.SignInBugHunter(response.data.data)
        this.setState({ logged: true })
      } else {
        this.setState({ openSnackBar: 'Senha ou login incorreto' })
      }
    }
    else if (type === 'company') {
      const response = await CompanyService.authCompany(values)

      if (!response.error) {
        console.log(response.data)
        this.props.SignInCompany(response.data.data)
        this.setState({ logged: true })
      } else {
        this.setState({ openSnackBar: 'Senha ou login incorreto' })
      }
    } else {
      const response = await AdminService.authAdmin(values)

      if (!response.error) {
        console.log(response.data)
        this.props.SignInAdmin(response.data.data)
        this.setState({ logged: true })
      } else {
        this.setState({ openSnackBar: 'Senha ou login incorreto' })
      }
    }
  }


  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return (
        <MessageBar
          message={openSnackBar}
          variant={'fail'}
        />
      );
    }
    return <div />;
  };
  render() {
    const { classes } = this.props;
    const { logged, type } = this.state;
    if (!logged) {
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
                    <Link to="/">
                      <img src={logo} alt="logo bughunter" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Typography component="h1" variant="h5" color="primary">
                      Entrar no sistema
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item style={{ width: '100%' }}>
                {this.renderSnackBar()}
                <Formik
                  initialValues={{ email: '', password: '' }}
                  onSubmit={values => {
                    this.setState({ openSnackBar: false })
                    this.login(values)
                  }}
                  validationSchema={schema}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setSubmitting
                  }) => (
                      <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <Grid container direction="column" spacing={2}>
                          <Grid item xs={12} style={{ width: "100%" }}>
                            <TextField
                              fullWidth
                              error={
                                !!(
                                  errors.email &&
                                  touched.email &&
                                  errors.email !== ""
                                )
                              }
                              label="E-mail"
                              name="email"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.email}
                              variant="outlined"
                            />
                            <Typography variant="subtitle2">
                              {errors.email && touched.email && errors.email}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} style={{ width: "100%" }}>
                            <TextField
                              fullWidth
                              error={
                                !!(
                                  errors.password &&
                                  touched.password &&
                                  errors.password !== ""
                                )
                              }
                              label="Senha"
                              name="password"
                              type='password'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.password}
                              variant="outlined"
                            />
                            <Typography variant="subtitle2">
                              {errors.password && touched.password && errors.password}
                            </Typography>
                          </Grid>
                          <Grid item style={{ width: '100%' }}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                this.setState({ type: 'bughunter' })
                                // setSubmitting(true)
                              }}
                              type='submit'
                              className={classes.submit}
                            >
                              Entrar como BugHunter
                            </Button>
                          </Grid>
                          <Grid item style={{ width: '100%' }}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="secondary"
                              onClick={() => {
                                this.setState({ type: 'company' })
                                // setSubmitting(true)
                              }}
                              type='submit'
                              className={classes.submit}
                            >
                              Entrar como Empresa
                            </Button>
                          </Grid>
                          <Grid item style={{ width: '100%' }}>
                            <Button
                              fullWidth
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                this.setState({ type: 'admin' })
                                // setSubmitting(true)
                              }}
                              type='submit'
                              className={classes.submit}
                            >
                              Entrar como Admin
                            </Button>
                          </Grid>
                          <Grid item style={{ width: '100%' }}>
                            <Grid container>
                              <Grid item xs>
                                <Link href="/" variant="body2" >
                                  <Typography color='textPrimary'>Esqueceu a senha?</Typography>
                                </Link>
                              </Grid>
                              <Grid item>
                                <Link href="/cadastro/escolher" variant="body2" color="primary">
                                  <Typography color='textPrimary'>
                                    Cadastre-se
                                  </Typography>
                                </Link>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </form>
                    )
                  }
                </Formik>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      );
    } else if (type === 'bughunter') {
      return (
        <Redirect to='/dashboard' />
      )
    }
    else if (type === 'company') {
      return (
        <Redirect to='/empresa/home' />
      )
    }

  }
}

const mapStateToProps = (state) => ({
  authState: state,
});

export default withStyles(useStyles)(connect(mapStateToProps, { SignInBugHunter, SignInCompany,SignInAdmin })(SignIn));
