import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../reducers/auth";
import { Aside } from "./Aside";

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
      <Aside />
      <div className='d-flex flex-column flex-lg-row flex-column-fluid'>
        <div className='d-flex flex-column flex-lg-row-fluid py-10'>
          <div className='d-flex flex-center flex-column flex-column-fluid'>
            <div className='w-lg-500px p-10'>
              <form
                className='form w-100'
                id='kt_sign_in_form'
                onSubmit={(e) => onSubmit(e)}
              >
                <div className='text-center mb-11'>
                  <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
                  <div className='text-gray-500 fw-semibold fs-6'>
                    Your Social Campaigns
                  </div>
                </div>
                <div className='separator separator-content my-14'>
                  <span className='w-125px text-gray-500 fw-semibold fs-7'>
                    Or with email
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

                <div className='fv-row mb-3'>
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
                </div>

                <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
                  <div></div>
                  <Link to='#' className='link-primary'>
                    Forgot Password ?
                  </Link>
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
                  <Link to='/register' className='link-primary'>
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className='d-flex flex-center flex-wrap px-5'>
            <div className='d-flex fw-semibold text-primary fs-base'>
              <Link to='#' className='px-5' target='_blank'>
                Terms
              </Link>
              <Link to='#' className='px-5' target='_blank'>
                Plans
              </Link>
              <Link to='#' className='px-5' target='_blank'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
