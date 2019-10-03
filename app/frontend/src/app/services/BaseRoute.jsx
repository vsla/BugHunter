import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.15.229:3002/api',
  headers: { 
    'Content-Type': 'application/json',
  }
})

export default axiosInstance
