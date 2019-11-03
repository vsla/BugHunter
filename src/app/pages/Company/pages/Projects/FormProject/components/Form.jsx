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
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormControl,
  Select,
  CircularProgress,
  MenuItem
} from "@material-ui/core";

// Shared layouts
import MessageBar from "../../../../../../components/MessageBar";
import ProjectService from "../../../../../../services/ProjectService";

// Custom components

const schema = yup.object().shape({
  name: yup.string().required("Digite o nome do projeto"),
  category: yup.string().required("Escolha uma categoria"),
  linkToRepository: yup.string().required("Digite o link"),
  longDescription: yup.string().required("Digite o passo a passo"),
  tableAmount: yup.number().min(0, "Digite um valor acima de 0")
  // .required("Digite o valor de pagamento")
});
class UserStorekeeperEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      edit: this.props.edit,
      openSnackBar: false,
      params: this.props.params,
      data: {
        name: "",
        category: "",
        shortDescription: "",
        linkToRepository: "",
        linkToLive: "",
        longDescription: "",
        tableAmount: "0",
        status: "active"
      }
    };
  }

  async componentDidMount() {
    const { edit, params } = this.state;
    if (edit) {
      const response = await ProjectService.getProject(params.id);
      const { name, category, link1, link2, description } = response.data;
      const responseData = {
        name: name,
        category: category ? category : "",
        shortDescription: "",
        linkToRepository: link1 ? link1 : "",
        linkToLive: link2 ? link2 : "",
        longDescription: description,
        tableAmount: "0",
        status: "active"
      };
      console.log(responseData);
      this.setState({ data: responseData, loading: false });
    } else {
      this.setState({ loading: false });
    }
  }

  getInitalValues = () => this.state.data;

  sendform = async project => {
    const { edit, data } = this.state;
    console.log(edit);
    const newProject = {
      name: project.name,
      company_id: 1,
      category: project.category,
      link1: project.linkToRepository,
      link2: project.linkToLive,
      description: project.longDescription,
      tableAmount: "0",
      status: "active"
    };
    if (edit === true) {
      const response = await ProjectService.updateProject(1, newProject);
      console.log(response);
      if (response.status === 200) {
        this.setState({ openSnackBar: "Projeto editado com com sucesso!" });
      } else {
        this.setState({ openSnackBar: "Erro ao editar o projeto!" });
      }
    } else {
      const response = await ProjectService.newProject(newProject);
      if (response.status === 201) {
        this.setState({ openSnackBar: "Projeto adicionado com com sucesso!" });
      } else {
        this.setState({ openSnackBar: "Erro ao criar o projeto!" });
      }
    }
  };

  renderSnackBar = () => {
    const { openSnackBar } = this.state;
    if (openSnackBar) {
      return <MessageBar message={openSnackBar} variant="sucess" />;
    }
    return <div />;
  };

  render() {
    const { loading, edit } = this.state;
    return (
      <Grid container>
        {this.renderSnackBar()}
        {!loading ? (
          <Formik
            initialValues={this.getInitalValues()}
            onSubmit={values => {
              this.setState({ openSnackBar: "" });
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
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  style={{ maxWidth: 750 }}
                >
                  <Grid item style={{ borderBottom: "1px solid black" }}>
                    <Typography variant="h5">
                      {!edit ? "Novo projeto" : "Editar projeto"}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    style={{
                      paddingTop: "25px",
                      paddingBottom: "25px",
                      width: "100%"
                    }}
                  >
                    <Grid container direction="column" spacing={2}>
                      {/* First line */}
                      <Grid item style={{ width: "100%" }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={7} style={{ width: "100%" }}>
                            <TextField
                              fullWidth
                              error={
                                !!(
                                  errors.name &&
                                  touched.name &&
                                  errors.name !== ""
                                )
                              }
                              label="Nome do projeto"
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
                          <Grid item xs={12} sm={5} style={{ width: "100%" }}>
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
                                  errors.category !== ""
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
                              <MenuItem value={"Android"}>Android</MenuItem>
                              <MenuItem value={"Swift"}>Swift</MenuItem>
                              <MenuItem value={"JsFramework"}>
                                JsFramework
                              </MenuItem>
                              <MenuItem value={"Windows"}>Windows</MenuItem>
                              <MenuItem value={"Linux"}>Linux</MenuItem>
                              <MenuItem value={"Mac"}>Mac</MenuItem>
                            </Select>
                            <Typography variant="subtitle2">
                              {errors.category &&
                                touched.category &&
                                errors.category}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          error={
                            !!(
                              errors.shortDescription &&
                              touched.shortDescription &&
                              errors.shortDescription !== ""
                            )
                          }
                          label="Pequena descrição do projeto"
                          name="shortDescription"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.shortDescription}
                          variant="outlined"
                        />
                        <Typography variant="subtitle2">
                          {errors.shortDescription &&
                            touched.shortDescription &&
                            errors.shortDescription}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          error={
                            !!(
                              errors.linkToRepository &&
                              touched.linkToRepository &&
                              errors.linkToRepository !== ""
                            )
                          }
                          label="Link para o respostório"
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
                      <Grid item xs={12} sm={12} style={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          error={
                            !!(
                              errors.linkToLive &&
                              touched.linkToLive &&
                              errors.linkToLive !== ""
                            )
                          }
                          label="Link Live app (opcional)"
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
                      <Grid item xs={12} sm={12} style={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          multiline
                          rows={6}
                          error={
                            !!(
                              errors.longDescription &&
                              touched.longDescription &&
                              errors.longDescription !== ""
                            )
                          }
                          label="Passo a Passo"
                          name="longDescription"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.longDescription}
                          variant="outlined"
                        />
                        <Typography variant="subtitle2">
                          {errors.longDescription &&
                            touched.longDescription &&
                            errors.longDescription}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ width: "100%" }}>
                        <TextField
                          fullWidth
                          type="number"
                          inputProps={{ min: "0", max: "10" }}
                          error={
                            !!(
                              errors.tableAmount &&
                              touched.tableAmount &&
                              errors.tableAmount !== ""
                            )
                          }
                          label="Valor da tabela a ser pago"
                          name="tableAmount"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.tableAmount}
                          variant="outlined"
                        />
                        <Typography variant="subtitle2">
                          {errors.tableAmount &&
                            touched.tableAmount &&
                            errors.tableAmount}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    style={{ borderTop: "1px solid black", width: "100%" }}
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
                          {!edit ? "Criar projeto" : "Editar projeto"}
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    );
  }
}

UserStorekeeperEdit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default UserStorekeeperEdit;
