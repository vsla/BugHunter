import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

// Shared layouts
import MessageBar from 'app/components/MessageBar';
import ProjectService from 'app/services/ProjectService';

// Material helpers
import {
  withStyles,
  Typography,
  Button,
  Grid,
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

// Custom components

const schema = yup.object().shape({
  name: yup.string().required('Digite o título do bug request'),
  category: yup.string().required('Escolha uma categoria'),
  linkToRepository: yup.string().required('Digite o link'),
  stepsStoRproduce: yup.string().required('Digite a descrição')
});
class BugRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.data,
      // edit: this.props.edit,
      openSnackBar: false
    };
  }

  getInitalValues = () => ({
    name: '',
    category: '',
    shortDescription: '',
    linkToRepository: '',
    linkToLive: '',
    stepsStoReproduce: '',
    tableAmount: '1',
    status: 'active'
  });

  sendform = async project => {
    // const { edit, data } = this.state;
    const edit = false;
    const id = 1;
    // const { data } = this.state;
    // if (edit === true) {
    //   const response = await ProjectService.newProject(
    //     id,
    //     project,
    //   );
    //   return response;
    // }
    const newProject = {
      name: project.name,
      description: project.shortDescription,
      company_id: id
    };
    console.log(newProject);
    const response = await ProjectService.newProject(newProject);
    if (response.status === 201) {
      this.setState({ openSnackBar: 'BugRequest adicionado com com sucesso!' });
    } else {
      this.setState({ openSnackBar: 'Erro ao criar o BugRequest!' });
    }
    console.log(response);
    return response;
  };

  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return <MessageBar message={openSnackBar} variant="sucess" />;
    }
    return <div />;
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        {this.renderSnackBar()}
        <Formik
          initialValues={this.getInitalValues()}
          onSubmit={values => {
            this.setState({ openSnackBar: '' });
            console.log(values);
            this.sendform(values);
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
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ maxWidth: 750 }}
              >
                <Grid
                  item
                  style={{
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    backgroundColor: 'rgba(227, 227, 227, 0.32)'
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    className={{
                      maxWidth: '900px'
                    }}
                  >
                    <Grid item>
                      <Typography variant="h3">Resolver BugRequest</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <div>Autor: </div>
                <Grid
                  item
                  style={{
                    paddingTop: '25px',
                    paddingBottom: '25px',
                    width: '100%'
                  }}
                >
                  <Grid container direction="column" spacing={2}>
                    {/* First line */}
                    <Grid item style={{ width: '100%' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                          <TextField
                            fullWidth
                            error={
                              !!(
                                errors.name &&
                                touched.name &&
                                errors.name !== ''
                              )
                            }
                            label="Título"
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
                        <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                          <Select
                            fullWidth
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.category}
                            variant="outlined"
                            error={
                              !!(
                                errors.category &&
                                touched.category &&
                                errors.category !== ''
                              )
                            }
                            input={
                              <TextField
                                id="outlined-age-simple"
                                name="category"
                                label="Categoria"
                                variant="outlined"
                              />
                            }
                          >
                            <MenuItem value={'Android'}>Android</MenuItem>
                            <MenuItem value={'Swift'}>Swift</MenuItem>
                            <MenuItem value={'JsFramework'}>
                              JsFramework
                            </MenuItem>
                            <MenuItem value={'Windows'}>Windows</MenuItem>
                            <MenuItem value={'Linux'}>Linux</MenuItem>
                            <MenuItem value={'Mac'}>Mac</MenuItem>
                          </Select>
                          <Typography variant="subtitle2">
                            {errors.category &&
                              touched.category &&
                              errors.category}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        error={
                          !!(
                            errors.linkToRepository &&
                            touched.linkToRepository &&
                            errors.linkToRepository !== ''
                          )
                        }
                        label="Link Repositório demo do bug"
                        name="linkToRepository"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.linkToRepository}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.linkToRepository &&
                          touched.linkToRepository &&
                          errors.linkToRepository}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        error={
                          !!(
                            errors.linkToLive &&
                            touched.linkToLive &&
                            errors.linkToLive !== ''
                          )
                        }
                        label="Link Live demo do bug (opcional)"
                        name="linkToLive"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.linkToLive}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.linkToLive &&
                          touched.linkToLive &&
                          errors.linkToLive}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} style={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        multiline
                        rows={6}
                        error={
                          !!(
                            errors.stepsStoRproduce &&
                            touched.stepsStoRproduce &&
                            errors.stepsStoRproduce !== ''
                          )
                        }
                        label="Descrição"
                        name="stepsStoRproduce"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.stepsStoRproduce}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.stepsStoRproduce &&
                          touched.stepsStoRproduce &&
                          errors.stepsStoRproduce}
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
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        size="large"
                      >
                        {'ENVIAR'}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Grid>
    );
  }
}

BugRequestForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BugRequestForm;
