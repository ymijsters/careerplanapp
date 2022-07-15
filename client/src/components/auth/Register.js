import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAlertWithTimout } from "../../reducers/alert";
import { addUpdateUser } from "../../reducers/auth";

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
      //@TODO: Move to other page after login
    }
  };

  return (
    <Fragment>
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
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

export default Register;
