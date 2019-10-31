import { Component } from 'react';
import { connect } from 'react-redux'
import axiosInstance from '../services/BaseRoute'

class CompanyService extends Component{
  
  static getAllCompanies = async () => {
    try {
      let res = await axiosInstance.get('/companies')
      console.log(res);
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};
    }
  }
  
  static getCompany = async (id) => {
    try {
      let res = await axiosInstance.get('/companies/' + id)
      return res
    } catch (erro) {
      console.log(erro);
      return {error: erro};

    }
  }

  static authCompany = async (company) => {
    try {
      console.log(company)
      let res = await axiosInstance.post('/companies/auth', company)
      return res
    } catch (erro) {
      return {error: erro};

    }

  }

  static newCompany = async (company) => {
    try {
      let res = await axiosInstance.post('/companies', company)
      return res
    } catch (erro) {
      return {error: erro};
    }

  }

  static updateCompany = async (id,company) =>  {
    try {
      let res = await axiosInstance.patch('/companies/' + id, company)
      console.log(res)
      return res
    } catch (erro) {
      return {error: erro};
    }
  }
}
export default CompanyService;

// const mapStateToProps = state => {
//   return {
//     authState: state,
//   }
// }

// export default connect(mapStateToProps)(companyService);



