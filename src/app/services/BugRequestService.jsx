import { Component } from 'react';
// import { connect } from 'react-redux'
import axiosInstance from './BaseRoute'
import axios from 'axios'

class ProjectService extends Component{
  static async getAllBugRequests(){
    try {
      let res = await axiosInstance.get('/projects/' )
      console.log(res);
      return res
    } catch (erro) {
      console.log({error: erro});
      return {error: erro};
    }
  }
  
  static async getAllBugRequestsBugHunter(bugHunterId){
    try {
      let res = await axiosInstance.get('/hunters/' + bugHunterId + '/bug_requests' )
      console.log(res);
      return res
    } catch (erro) {
      console.log({error: erro});
      return {error: erro};
    }
  }

  static async getAllBugRequestsCompany(projectId){
    try {
      let res = await axiosInstance.get('/projects/' + projectId + '/bug_requests' )
      console.log(res);
      return res
    } catch (erro) {
      console.log({error: erro});
      return {error: erro};
    }
  }
 

  static getBugRequest = async (projectId) => {
    try {
      let res = await axiosInstance.get('/projects/' + projectId)
      console.log(res)
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};
    }
  }

  static newBugRequest = async (bugRequest) => {
    try {
      let res = await axiosInstance.post('/bug_requests', bugRequest)
      console.log(res)
      return res
    } catch (erro) {
      return {error: erro};
    }

  }

  static updateBugRequest =  async (id,Project) =>  {
    console.log(Project)
    try {
      let res = await axiosInstance.put(`/projects/${id}`, Project)     
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
// 

// export default connect(mapStateToProps)(ProjectService);
