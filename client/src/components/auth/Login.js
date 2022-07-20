import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../reducers/auth";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (auth.isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='d-flex flex-column flex-root'>
        <div className='d-flex flex-column flex-lg-row flex-column-fluid'>
          <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
            <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
              <div className='w-lg-500px p-10'>
                <form
                  className='form w-100'
                  noValidate='novalidate'
                  id='kt_sign_in_form'
                  action='#'
                >
                  <div className='text-center mb-11'>
                    <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                    <div className='text-gray-500 fw-semibold fs-6'>
                      Your Social Campaigns
                    </div>
                  </div>
                  <div className='row g-3 mb-9'>
                    <div className='col-md-6'>
                      <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                      >
                        <img alt='Logo' className='h-15px me-3' />
                        Sign in with Google
                      </a>
                    </div>
                    <div className='col-md-6'>
                      <a
                        href='#'
                        className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
                      >
                        <img
                          alt='Logo'
                          className='theme-light-show h-15px me-3'
                        />
                        <img
                          alt='Logo'
                          className='theme-dark-show h-15px me-3'
                        />
                        Sign in with Apple
                      </a>
                    </div>
                  </div>
                  <div className='separator separator-content my-14'>
                    <span className='w-125px text-gray-500 fw-semibold fs-7'>
                      Or with email
                    </span>
                  </div>
                  <div className='fv-row mb-8'>
                    <input
                      type='text'
                      placeholder='Email'
                      name='email'
                      autoComplete='off'
                      className='form-control bg-transparent'
                    />
                  </div>

                  <div className='fv-row mb-3'>
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      autoComplete='off'
                      className='form-control bg-transparent'
                    />
                  </div>

                  <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                    <div></div>
                    <a
                      href='../../demo11/dist/authentication/layouts/corporate/reset-password.html'
                      className='link-primary'
                    >
                      Forgot Password ?
                    </a>
                  </div>

                  <div className='d-grid mb-10'>
                    <button
                      type='submit'
                      id='kt_sign_in_submit'
                      className='btn btn-primary'
                    >
                      <span className='indicator-label'>Sign In</span>

                      <span className='indicator-progress'>
                        Please wait...
                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                      </span>
                    </button>
                  </div>

                  <div className='text-gray-500 text-center fw-semibold fs-6'>
                    Not a Member yet?
                    <a
                      href='../../demo11/dist/authentication/layouts/corporate/sign-up.html'
                      className='link-primary'
                    >
                      Sign up
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
          <div className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'>
            <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
              <a href='../../demo11/dist/index.html' className='mb-12'>
                <img alt='Logo' className='h-75px' />
              </a>
              <img
                className='mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20'
                alt=''
              />
              <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
                Fast, Efficient and Productive
              </h1>
              <div className='text-white fs-base text-center'>
                In this kind of post,
                <a
                  href='#'
                  className='opacity-75-hover text-warning fw-bold me-1'
                >
                  the blogger
                </a>
                introduces a person they’ve interviewed
                <br />
                and provides some background information about
                <a
                  href='#'
                  className='opacity-75-hover text-warning fw-bold me-1'
                >
                  the interviewee
                </a>
                and their
                <br />
                work following this is a transcript of the interview.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
