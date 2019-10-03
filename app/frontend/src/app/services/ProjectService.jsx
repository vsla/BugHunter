import { Component } from 'react';
import { connect } from 'react-redux'
import axiosInstance from './BaseRoute'

class ProjectService extends Component{
  
  static getAllProjects = async (companyId) => {
    try {
      let res = await axiosInstance.get('/project/states/Pernambuco' + companyId)
      console.log(res);
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};
    }
  }
  
  static getProject = async (projectId) => {
    try {
      let res = await axiosInstance.get('/project/' + id)
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};

    }
  }

  static authProject = async (Project) => {
    try {
      console.log(Project)
      let res = await axiosInstance.post('/project/auth', Project)
      return res
    } catch (erro) {
      return {error: erro};

    }

  }

  static newProject = async (Project) => {
    try {
      let res = await axiosInstance.post('/project/', Project)
      return res
    } catch (erro) {
      return {error: erro};
    }

  }

  static updateProject = (id,Project) =>  {
    try {
      let res = await axiosInstance.patch('/project/' + id, Project)
      console.log(res)
      return res
    } catch (erro) {
      return {error: erro};
    }
  }
}
export default ProjectService;

// const mapStateToProps = state => {
//   return {
//     authState: state,
//   }
// }

// export default connect(mapStateToProps)(ProjectService);
