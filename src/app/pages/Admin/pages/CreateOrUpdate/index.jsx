/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// Externals
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
// Material helpers
import {
  withStyles,
  Button,
  TextField,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from '@material-ui/core';
// Material components
import { Grid, Paper, Typography } from '@material-ui/core';
// Shared layouts
import Dashboard from '../../../../layouts/Dashboard';
// Custom components
// Component styles
const styles = theme => ({
  StorekeeperDashboard: {
    padding: theme.spacing.unit * 4,
    flexGrow: 1
  },
  Paperpendency: {
    padding: '18px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '2px'
  },
  subTitle: {
    fontSize: '12px'
  },
  item: {}
});

const schema = yup.object().shape({
  name: yup.string().required('Digite o título do bug request'),
  category: yup.string().required('Escolha uma categoria'),
  linkToRepository: yup.string().required('Digite o link'),
  stepsStoRproduce: yup.string().required('Digite a descrição')
});

const getInitalValues = () => ({
  name: '',
  email: '',
  cnpj_cpf: 'cpf',
  id: '',
  password: '',
  confirmPassword: ''
});

const FormAdmin = props => {
  const { classes } = props;

  return (
    <Dashboard title="Admins" profile="Admin">
      <div className={classes.StorekeeperDashboard}>
        <Grid container>
          <Formik
            initialValues={getInitalValues()}
            onSubmit={values => {
              const bughunter = {
                name: values.name,
                cnpj: values.id,
                password: values.password,
                email: values.email
              };
              this.setState({ openSnackBar: '' });
              console.log(values, bughunter);
              this.sendform(bughunter);
            }}
            validationSchema={schema}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{ width: '100%', maxWidth: '550px' }}
              >
                <Grid
                  container
                  direction="column"
                  spacing={1}
                  style={{ maxWidth: 750 }}
                >
                  <Grid item>
                    <Grid
                      container
                      direction="column"
                      justify="space-around"
                      alignItems="center"
                      spacing={2}
                    >
                      <Grid item>
                        <Typography variant="h2" color="primary">
                          Novo Administrador
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{
                      paddingTop: '25px',
                      paddingBottom: '25px',
                      width: '100%'
                    }}
                  >
                    <Grid container direction="column" spacing={1}>
                      {/* First line */}
                      <Grid item xs={12} style={{ width: '100%' }}>
                        <TextField
                          fullWidth
                          error={
                            !!(
                              errors.name &&
                              touched.name &&
                              errors.name !== ''
                            )
                          }
                          label="Nome"
                          Inpu
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          variant="outlined"
                        />
                        <Typography variant="subtitle2">
                          {errors.name && touched.name && errors.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ width: '100%' }}>
                        <TextField
                          fullWidth
                          error={
                            !!(
                              errors.email &&
                              touched.email &&
                              errors.email !== ''
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
                    </Grid>
                    <Grid item xs={12} style={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        error={
                          !!(
                            errors.password &&
                            touched.password &&
                            errors.password !== ''
                          )
                        }
                        label="Senha"
                        name="password"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.password && touched.password && errors.password}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        error={
                          !!(
                            errors.confirmPassword &&
                            touched.confirmPassword &&
                            errors.confirmPassword !== ''
                          )
                        }
                        label="Confirme a senha"
                        name="confirmPassword"
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.confirmPassword &&
                          touched.confirmPassword &&
                          errors.confirmPassword}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{ borderTop: '1px solid black', width: '100%' }}
                >
                  <Grid
                    container
                    className="radio_container"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Situação</FormLabel>
                        <RadioGroup
                          row={!(window.innerWidth < 375)}
                          aria-label="Situação"
                          name="status"
                          value={values.status}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="active"
                            control={<Radio />}
                            label="Ativo"
                          />
                          <FormControlLabel
                            value="inactive"
                            control={<Radio />}
                            label="Inativo"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="medium"
                      >
                        {'Cadastrar'}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </div>
    </Dashboard>
  );
};

FormAdmin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormAdmin);
