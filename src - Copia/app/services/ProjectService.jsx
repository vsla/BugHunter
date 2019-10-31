import { Component } from "react";
// import { connect } from 'react-redux'
import axiosInstance from "./BaseRoute";
import axios from "axios";

class ProjectService extends Component {
  static async getAllProjects() {
    try {
      let res = await axiosInstance.get("/projects/");
      console.log(res);
      return res;
    } catch (erro) {
      console.log({ error: erro });
      return { error: erro };
    }
  }

  static getProject = async projectId => {
    try {
      let res = await axiosInstance.get("/projects/" + projectId);
      return res;
    } catch (erro) {
      console.log(erro);
      return { error: erro };
    }
  };

  static authProject = async Project => {
    try {
      console.log(Project);
      let res = await axiosInstance.post("/projects/auth", Project);
      return res;
    } catch (erro) {
      return { error: erro };
    }
  };

  static newProject = async Project => {
    try {
      let res = await axiosInstance.post("/projects", Project);
      console.log(res);
      return res;
    } catch (erro) {
      return { error: erro };
    }
  };

  static updateProject = async (id, Project) => {
    console.log(Project);
    try {
      let res = await axiosInstance.put(`/projects/${id}`, Project);
      console.log(res);
      return res;
    } catch (erro) {
      return { error: erro };
    }
  };
}
export default ProjectService;

// const mapStateToProps = state => {
//   return {
//     authState: state,
//   }
//

// export default connect(mapStateToProps)(ProjectService);
