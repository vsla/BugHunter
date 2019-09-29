import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';

// Material helpers
import {
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
} from '@material-ui/core';

// Shared layouts
import MessageBar from '../../../../../../components/MessageBar';

// Custom components

const schema = yup.object().shape({
});
class UserStorekeeperEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.data,
      // edit: this.props.edit,
      openSnackBar: false,
    };
  }

  getInitalValues = () => ({
    name: '',
    category: '',
    shortDescription: '',
    linkToRepository: '',
    linkToLive: '',
    stepsStoRproduce: '',
    status: '',
  });

  // sendform = async (admin) => {
  //   const { edit, data } = this.state;
  //   if (edit === true) {
  //     console.log(data._id, admin);
  //     const response = await StoreKeeperService.storekeeperUpdate(
  //       data._id,
  //       admin,
  //     );
  //     return response;
  //   }
  //   const response = await StoreKeeperService.adminNew(admin);
  //   return response;
  // };

  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return (
        <MessageBar
          message="Projeto adicionado com com sucesso!"
          variant="sucess"
        />
      );
    }
    return <div />;
  };

  render() {
    return (
      <Grid container>
        {this.renderSnackBar()}
        <Formik
          initialValues={this.getInitalValues()}
          onSubmit={(values) => {
            this.setState({ openSnackBar: false });
            console.log(values);
            this.setState({ openSnackBar: true });
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
          }) => (
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Grid container direction="column" spacing={2} style={{ maxWidth: 750 }}>
                <Grid item style={{ borderBottom: '1px solid black' }}>
                  <Typography variant="h5">
                    Novo projeto
                  </Typography>
                </Grid>
                <Grid item style={{ paddingTop: '25px', paddingBottom: '25px', width: '100%' }}>
                  <Grid container direction="column" spacing={2}>
                    {/* First line */}
                    <Grid item style={{ width: '100%' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            error={
                              !!(errors.coupon_code
                                && touched.coupon_code
                                && errors.coupon_code !== '')
                            }
                            label="Nome"
                            name="coupon_code"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.coupon_code}
                            variant="outlined"
                          />
                          <Typography variant="subtitle2">
                            {errors.coupon_code
                              && touched.coupon_code
                              && errors.coupon_code}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Select
                            fullWidth

                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.category}
                            variant="outlined"
                            error={
                              !!(errors.category
                                && touched.category
                                && errors.category !== '')
                            }
                            input={(
                              <TextField
                                id="outlined-age-simple"
                                name="category"
                                label="Categoria"
                                variant="outlined"
                              />
                            )}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                          <Typography variant="subtitle2">
                            {errors.coupon_code
                              && touched.coupon_code
                              && errors.coupon_code}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        error={
                          !!(errors.linkToRepository
                            && touched.linkToRepository
                            && errors.linkToRepository !== '')
                        }
                        label="Link para o respostório"
                        name="linkToRepository"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.linkToRepository}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.linkToRepository
                          && touched.linkToRepository
                          && errors.linkToRepository}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        error={
                          !!(errors.linkToLive
                            && touched.linkToLive
                            && errors.linkToLive !== '')
                        }
                        label="Link Live app (opicional)"
                        name="linkToLive"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.linkToLive}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.linkToLive
                          && touched.linkToLive
                          && errors.linkToLive}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        error={
                          !!(errors.stepsStoRproduce
                            && touched.stepsStoRproduce
                            && errors.stepsStoRproduce !== '')
                        }
                        label="Passo a Passo"
                        name="stepsStoRproduce"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.stepsStoRproduce}
                        variant="outlined"
                      />
                      <Typography variant="subtitle2">
                        {errors.stepsStoRproduce
                          && touched.stepsStoRproduce
                          && errors.stepsStoRproduce}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ borderTop: '1px solid black' }}>
                  <Grid
                    container
                    className="radio_container"
                    justify="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Situação</FormLabel>
                        <RadioGroup row aria-label="Situação" name="status" value={values.status} onChange={handleChange}>
                          <FormControlLabel value="active" control={<Radio />} label="Ativo" />
                          <FormControlLabel value="inactive" control={<Radio />} label="Inativo" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Button variant="contained" color="primary" type="submit" size="large">
                        {'Criar'}
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

UserStorekeeperEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default UserStorekeeperEdit;
