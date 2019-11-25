import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

// Shared layouts
import MessageBar from 'app/components/MessageBar';
import ProjectService from 'app/services/ProjectService';
import BugRequestService from 'app/services/BugRequestService';

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
  MenuItem,
  CircularProgress
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
    console.log(this.props)
    const { id } = this.props
    this.state = {
      // data: this.props.data,
      // edit: this.props.edit,
      id: id,
      openSnackBar: false,
      loading: true
    };
  }

  getInitalValues = () => (
    {
      name: this.state.data.name,
      category: this.state.data.category,
      shortDescription: '',
      linkToRepository: this.state.data.link1,
      linkToLive: this.state.data.link2,
      solvePoints: '',
      linkCalc: '',
      stepsStoReproduce: this.state.data.description,

    });



  componentDidMount() {
    this.getBugRequest()
  }

  sendform = async bugRequest => {
    const { id } = this.state
    let newBugRequest = {
      ...bugRequest,
      status: 'Done'
    }
    const response = await BugRequestService.updateBugRequest(id, newBugRequest);
    if (response.status === 201) {
      this.setState({ openSnackBar: 'BugRequest adicionado com com sucesso!' });
    } else {
      this.setState({ openSnackBar: 'Erro ao criar o BugRequest!' });
    }
    console.log(response);
    return response;
  };

  getBugRequest = async () => {
    const { id } = this.state
    const response = await BugRequestService.getBugRequest(id)
    console.log(response)
    if (!response.error) {
      this.setState({ loading: false, data: response.data })
    }
  }

  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return <MessageBar message={openSnackBar} variant="sucess" />;
    }
    return <div />;
  };

  render() {
    const { classes } = this.props;
    const { loading } = this.state

    return (
      <Grid container>
        {this.renderSnackBar()}
        {
          !loading ? (
            <Formik
              initialValues={this.getInitalValues()}
              onSubmit={values => {
                this.setState({ openSnackBar: '' });
                console.log(values);
                // this.sendform(values);
              }}
            // validationSchema={schema}
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
                        <Grid container spacing={2}>
                          {/* First line */}
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
                              disabled
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
                              disabled
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
                              <MenuItem value={'Impeditiva'}>Impeditiva</MenuItem>
                              <MenuItem value={'Funcional'}>Funcional</MenuItem>
                              <MenuItem value={'Interface'}>Interface</MenuItem>
                              <MenuItem value={'Texto'}>Texto</MenuItem>
                              <MenuItem value={'Melhoria'}>Melhoria</MenuItem>
                              <MenuItem value={'Segurança'}>Segurança</MenuItem>
                            </Select>
                            <Typography variant="subtitle2">
                              {errors.category &&
                                touched.category &&
                                errors.category}
                            </Typography>
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
                              disabled
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
                              disabled
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
                              disabled
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
                          <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                            <TextField
                              fullWidth
                              error={
                                !!(
                                  errors.solvePoints &&
                                  touched.solvePoints &&
                                  errors.solvePoints !== ''
                                )
                              }
                              type='number'
                              inputProps={
                                {
                                  min: 0, max: 10
                                }
                              }
                              label="Pontuação do bug"
                              name="solvePoints"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.solvePoints}
                              variant="outlined"
                            />
                            <Typography variant="subtitle2">
                              {errors.solvePoints &&
                                touched.solvePoints &&
                                errors.solvePoints}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6} style={{ width: '100%' }}>
                            <TextField
                              fullWidth
                              error={
                                !!(
                                  errors.linkCalc &&
                                  touched.linkCalc &&
                                  errors.linkCalc !== ''
                                )
                              }
                              label="Link da calculadora"
                              name="linkCalc"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.linkCalc}
                              variant="outlined"
                            />
                            <Typography variant="subtitle2">
                              {errors.linkCalc &&
                                touched.linkCalc &&
                                errors.linkCalc}
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
                              Resolver
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                )}
            </Formik>

          ) : (
              <Grid container>
                <Grid item>
                  <CircularProgress />
                </Grid>
              </Grid>
            )
        }
      </Grid>
    );
  }
}

BugRequestForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default BugRequestForm;
