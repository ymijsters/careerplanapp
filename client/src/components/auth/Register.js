import React, { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAlertWithTimout } from "../../reducers/alert";
import { addUpdateUser } from "../../reducers/auth";
import { AuthAside } from "./AuthAside";
import { Alert } from "../layout/Alert";

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
      <div className='d-flex flex-column flex-lg-row flex-column-fluid'>
        <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
          <Alert />
          <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
            <div className='w-lg-500px p-10'>
              <form
                className='form w-100'
                novalidate='novalidate'
                id='kt_sign_up_form'
                onSubmit={(e) => onSubmit(e)}
              >
                <div className='text-center mb-11'>
                  <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
                  <div className='text-gray-500 fw-semibold fs-6'>
                    Career Plan App
                  </div>
                </div>
                <div className='separator separator-content my-14'>
                  <span className='w-200px text-gray-500 fw-semibold fs-7'>
                    Sign up with email
                  </span>
                </div>
                <div className='fv-row mb-8'>
                  <input
                    type='email'
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => onChange(e)}
                    name='email'
                    required
                    className='form-control bg-transparent'
                  />
                </div>
                <div className='fv-row mb-8' data-kt-password-meter='true'>
                  <div className='mb-1'>
                    <div className='position-relative mb-3'>
                      <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength='6'
                        required
                        className='form-control bg-transparent'
                      />
                      <span
                        className='btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2'
                        data-kt-password-meter-control='visibility'
                      >
                        <i className='bi bi-eye-slash fs-2'></i>
                        <i className='bi bi-eye fs-2 d-none'></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className='fv-row mb-8'>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    name='password2'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    minLength='6'
                    required
                    className='form-control bg-transparent'
                  />
                </div>
                <div className='fv-row mb-8'>
                  <label className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      name='toc'
                      value='1'
                    />
                    <span className='form-check-label fw-semibold text-gray-700 fs-base ms-1'>
                      I Accept the
                      <a href='#' className='ms-1 link-primary'>
                        Terms
                      </a>
                    </span>
                  </label>
                </div>
                <div className='d-grid mb-10'>
                  <button
                    type='submit'
                    id='kt_sign_up_submit'
                    className='btn btn-primary'
                  >
                    <span className='indicator-label'>Sign up</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  </button>
                </div>
                <div className='text-gray-500 text-center fw-semibold fs-6'>
                  Already have an Account?
                  <a
                    href='../../demo11/dist/authentication/layouts/corporate/sign-in.html'
                    className='link-primary fw-semibold'
                  >
                    Sign in
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className='d-flex flex-center flex-wrap px-5'>
            <div className='d-flex fw-semibold text-primary fs-base'>
              <a
                href='../../demo11/dist/pages/team.html'
                className='px-5'
                target='_blank'
              >
                Terms
              </a>
              <a
                href='../../demo11/dist/pages/pricing/column.html'
                className='px-5'
                target='_blank'
              >
                Plans
              </a>
              <a
                href='../../demo11/dist/pages/contact.html'
                className='px-5'
                target='_blank'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <AuthAside />
      </div>
    </Fragment>
  );
};

export default Register;
