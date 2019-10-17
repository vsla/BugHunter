import React, { Component } from "react";

// Externals
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as yup from "yup";

// Material helpers
import {
  Typography,
  Button,
  Grid,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import HunterImage from '../../../../assets/HunterLogo.png'

// Shared layouts
import MessageBar from "../../../../components/MessageBar";
import ProjectService from "../../../../services/ProjectService";

// Regex
import { cpfRegex, phonRegex, passwordRegex } from '../../../../components/FormattedInput/Regex'

// Router
import {Redirect} from 'react-router-dom'

//Formatted inputs
import { CpfFormatted, PhoneFormatted, CnpjFormatted } from '../../../../components/FormattedInput'

const schema = yup.object().shape({
  name: yup.string().required("Digite o nome do projeto"),
  email: yup.string().email('Digite um email válido').required("Digite um email"),
  id: yup.string().required("Digite cpf ou cnpj"),
  phone: yup.string().matches(phonRegex, 'Digite o telefone').required("Digite o telefone"),
  password: yup
    .string()
    //.matches(passwordRegex, 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um numero')
    .min(8, 'A senha precisa ter no mínimo 8 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .required('A confirmação de senha é obrigatória')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser idênticas'),
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: this.props.data,
      // edit: this.props.edit,
      openSnackBar: false,
      isSignUp: false
    };
  }

  getInitalValues = () => ({
    name: "",
    email: "",
    cnpj_cpf: "cnpj",
    id: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
      this.setState({ openSnackBar: "Projeto adicionado com com sucesso!", type: 'sucess' });
    } else {
      this.setState({ openSnackBar: "Erro ao criar o projeto!", type: 'error' });
    }
    console.log(response);
    return response;
  };

  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return (
        <MessageBar
          message={openSnackBar}
          variant="sucess"
        />
      );
    }
    return <div />;
  };

  render() {
    const { isSignUp } = this.state
    if (!isSignUp){
      return (
        <Grid container justify='center'>
          {this.renderSnackBar()}
          <Formik
            initialValues={this.getInitalValues()}
            onSubmit={values => {
              // this.setState({ openSnackBar: "" });
              // console.log(values);
              // this.sendform(values);
              this.setState({ isSignUp: true })
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
                <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: '550px' }}>
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    style={{ maxWidth: 750 }}
                  >
                    <Grid item>
                      <Grid container direction='column' justify='space-around' alignItems='center' spacing={2}>
                        <Grid item>
                          <img src={HunterImage} height={80} />
                        </Grid>
                        <Grid item>
                          <Typography variant="h2" color='primary'>Olá empresa, Faça seu cadastro</Typography>
                        </Grid>
                      </Grid>
  
                    </Grid>
                    <Grid
                      item
                      style={{
                        paddingTop: "25px",
                        paddingBottom: "25px",
                        width: "100%"
                      }}
                    >
                      <Grid container direction="column" spacing={1}>
                        {/* First line */}
                        <Grid item xs={12} style={{ width: "100%" }}>
                          <TextField
                            fullWidth
                            error={
                              !!(
                                errors.name &&
                                touched.name &&
                                errors.name !== ""
                              )
                            }
                            label="Nome da empresa"
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
                          <Grid container direction='column'>
                            <Grid item>
                              <FormControl component="fieldset">
                                <RadioGroup 
                                  aria-label="CPJ OR CNPJ" 
                                  name="cnpj_cpf" 
                                  value={values.cnpj_cpf} 
                                  onChange={handleChange} 
                                  row
                                >
                                  <FormControlLabel
                                    value="cnpj"
                                    control={<Radio color="primary" />}
                                    label="CNPJ"
                                    labelPlacement="end"
                                  />
                                  <FormControlLabel
                                    value="cpf"
                                    control={<Radio color="secondary" />}
                                    label="CPF"
                                    labelPlacement="end"
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                              <TextField
                                fullWidth
                                error={
                                  !!(
                                    errors.id &&
                                    touched.id &&
                                    errors.id !== ""
                                  )
                                }
                                InputProps={
                                  values.cnpj_cpf === 'cnpj' ? {inputComponent: CnpjFormatted } : {inputComponent: CpfFormatted}
                                }
                                label={values.cnpj_cpf === 'cnpj' ? 'CNPJ' : 'CPF'}
                                name="id"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.id}
                                variant="outlined"
                              />
                              <Typography variant="subtitle2">
                                {errors.id && touched.id && errors.id}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ width: "100%" }}>
                          <TextField
                            fullWidth
                            error={
                              !!(
                                errors.phone &&
                                touched.phone &&
                                errors.phone !== ""
                              )
                            }
                            label="Telefone"
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone}
                            variant="outlined"
                          />
                          <Typography variant="subtitle2">
                            {errors.phone && touched.phone && errors.phone}
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
                        <Grid item xs={12} style={{ width: "100%" }}>
                          <TextField
                            fullWidth
                            error={
                              !!(
                                errors.confirmPassword &&
                                touched.confirmPassword &&
                                errors.confirmPassword !== ""
                              )
                            }
                            label="Confirme a senha"
                            name="confirmPassword"
                            type='password'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirmPassword}
                            variant="outlined"
                          />
                          <Typography variant="subtitle2">
                            {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{ width: "100%" }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {this.setState({ isSignUp: true })}}
                      fullWidth
                      color="primary"
                      type="submit"
                      size="medium"
                    >
                      {"Criar"}
                    </Button>
                  </Grid>
                </form>
              )
            }
          </Formik>
        </Grid >
      );
    }
    return (
      <Redirect to='/cadastro/cadastrado'/>
    )
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SignUpForm;
