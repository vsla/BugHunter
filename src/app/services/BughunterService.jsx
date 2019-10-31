import { Component } from 'react';
import { connect } from 'react-redux'
import axiosInstance from './BaseRoute'

class BugHunterService extends Component{
  
  static getAllBughunter = async () => {
    try {
      let res = await axiosInstance.get('/hunters')
      console.log(res);
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};
    }
  }
  
  static getBughunter = async (id) => {
    try {
      let res = await axiosInstance.get('/hunters/' + id)
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};

    }
  }

  static authBughunter = async (Bughunter) => {
    try {
      console.log(Bughunter)
      let res = await axiosInstance.post('/hunters/auth', Bughunter)
      return res
    } catch (erro) {
      return {error: erro};

    }

  }

  static newBughunter = async (Bughunter) => {
    try {
      let res = await axiosInstance.post('/hunters', Bughunter)
      return res
    } catch (erro) {
      return {error: erro};
    }

  }

  static updateBughunter = async (id,Bughunter) =>  {
    try {
      let res = await axiosInstance.patch('/hunters/' + id, Bughunter)
      console.log(res)
      return res
    } catch (erro) {
      return {error: erro};
    }
  }
}
export default BugHunterService;

// const mapStateToProps = state => {
//   return {
//     authState: state,
//   }
// }

// export default connect(mapStateToProps)(BughunterService);



