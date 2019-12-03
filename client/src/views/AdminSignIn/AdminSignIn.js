import React, { Component } from 'react';
import './AdminSignIn.css';
import { withRouter, Redirect } from "react-router-dom";
import {useAuth} from "../../context/auth";
import axios from 'axios';
import { useState } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class AdminSignIn extends Component {

  constructor() {
    super();
    this.state = {
      password: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onSubmit = e => {
    e.preventDefault();
const userData = {
      password: this.state.password
    };
this.props.loginUser(userData);

if (userData.password == "test"){
  console.log("success");
}
  };

  render(){


  return(

  <form class="admin-form"
  onSubmit = {this.onSubmit}>
    <div class="form-group">
      <label for="exampleInputPassword">Enter Password</label>
      <input
      onChange = {event => this.setState({password: event.target.value})}
      type="password" 
      class="form-control" 
      placeholder="Password"
      name = "password"
      value = {this.state.password}
       />
    </div>
    <div class="form-group form-check">
    </div>
    <button type="submit" value = "login" class="btn btn-primary">Submit</button>
  </form>
    
    );
  }
}

AdminSignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  auth: state.auth,
});
export default connect(
  mapStateToProps,
  { loginUser }
)(AdminSignIn);
