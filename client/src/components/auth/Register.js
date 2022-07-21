import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAlertWithTimout } from "../../reducers/alert";
import { addUpdateUser } from "../../reducers/auth";
import { AuthAside } from "./AuthAside";

export const Register = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (auth.isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(
        addAlertWithTimout({
          msg: "Passwords do not match",
          alertType: "danger",
        })
      );
    } else {
      dispatch(
        addUpdateUser({
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <Fragment>
      <div
        className='d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep'
        id='kt_create_account_stepper'
      >
        <div className='d-flex flex-column flex-lg-row-fluid py-10'>
          <div className='d-flex flex-center flex-column flex-column-fluid'>
            <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'></div>
            <h1 className='large text-primary'>Sign Up</h1>
            <p className='lead'>
              <i className='fas fa-user'></i> Create Your Account
            </p>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                <input
                  type='email'
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => onChange(e)}
                  name='email'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => onChange(e)}
                  minLength='6'
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='password2'
                  value={password2}
                  onChange={(e) => onChange(e)}
                  minLength='6'
                  required
                />
              </div>
              <input
                type='submit'
                className='btn btn-primary'
                value='Register'
              />
            </form>
            <p className='my-1'>
              Already have an account? <Link to='/login'>Sign In</Link>
            </p>
          </div>
        </div>
      </div>
      <AuthAside />
    </Fragment>
  );
};

export default Register;
