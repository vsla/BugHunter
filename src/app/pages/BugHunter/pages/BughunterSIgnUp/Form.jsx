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
import HunterImage from "../../../../assets/HunterLogo.png";

// Shared layouts
import MessageBar from "../../../../components/MessageBar";
import BughunterService from "../../../../services/BughunterService";

// Regex
import { cpfRegex } from "../../../../components/FormattedInput/Regex";

// Router
import { Redirect } from "react-router-dom";

//Formatted inputs
import { CpfFormatted } from "../../../../components/FormattedInput";

const schema = yup.object().shape({
  name: yup.string().required("Digite o seu nome"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite um email"),
  id: yup
    .string()
    .matches(cpfRegex, "Cpf incorreto")
    .required("Digite o cpf"),
  password: yup
    .string()
    //.matches(passwordRegex, 'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um numero')
    .min(6, "A senha precisa ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas precisam ser idênticas")
});
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackBar: false,
      isSignUp: false
    };
  }

  getInitalValues = () => ({
    name: "",
    email: "",
    cnpj_cpf: "cpf",
    id: "",
    password: "",
    confirmPassword: ""
  });

  sendform = async Bughunter => {
    const response = await BughunterService.newBughunter(Bughunter);

    if (response.status === 201) {
      this.setState({ isSignUp: true });
    } else {
      this.setState({
        openSnackBar: "Email já existente",
        type: "error"
      });
    }
    console.log(response);
    return response;
  };

  renderSnackBar = () => {
    const { openSnackBar, type } = this.state;
    if (openSnackBar) {
      return <MessageBar message={openSnackBar} variant={type} />;
    }
    return <div />;
  };

  render() {
    const { isSignUp } = this.state;
    if (!isSignUp) {
      return (
        <Grid container justify="center">
          {this.renderSnackBar()}
          <Formik
            initialValues={this.getInitalValues()}
            onSubmit={values => {
              const bughunter = {
                name: values.name,
                cnpj: values.id,
                password: values.password,
                email: values.email
              };
              this.setState({ openSnackBar: "" });
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
                style={{ width: "100%", maxWidth: "550px" }}
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
                        <img src={HunterImage} height={80} />
                      </Grid>
                      <Grid item>
                        <Typography variant="h2" color="primary">
                          Olá BugHunter, Faça seu cadastro
                        </Typography>
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
                            !!(errors.id && touched.id && errors.id !== "")
                          }
                          InputProps={{ inputComponent: CpfFormatted }}
                          label="CPF"
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
                <Grid item style={{ width: "100%" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    type="submit"
                    size="medium"
                  >
                    {"Criar"}
                  </Button>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      );
    }
    return <Redirect to="/cadastro/cadastrado" />;
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SignUpForm;
