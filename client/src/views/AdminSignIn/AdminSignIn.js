import React from 'react';
import './AdminSignIn.css';
import {form } from 'react-bootstrap';



function AdminSignIn() {

<form class="admin-form">
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    
    );
}

export default AdminSignIn;
