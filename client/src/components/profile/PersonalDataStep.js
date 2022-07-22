import React, { useState } from "react";

export const PersonalDataStep = () => {
  const [formData, setFormData] = useState({
    name: "",
    currentCompany: "",
    unemployed: false,
    currentFunction: "",
  });

  const { name, currentCompany, unemployed, currentFunction } = formData;

  const onChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  return (
    <form
      className='my-auto pb-5'
      novalidate='novalidate'
      id='kt_create_account_form'
      data-kt-redirect-url='../../demo11/dist/account/overview.html'
    >
      <div className='current' data-kt-stepper-element='content'>
        <div className='w-100'>
          <div className='pb-10 pb-lg-15'>
            <h2 className='fw-bold d-flex align-items-center text-dark'>
              Who are you?
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              Before you dive in, please tell us a little about yourself. Review
              our&nbsp;
              <a href='#' className='link-primary fw-bold'>
                Privacy Statement
              </a>
              &nbsp;to see how we keep your data save.
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>Your Name</label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='name'
              placeholder=''
              onChange={(e) => onChange(e)}
              value={name}
            />
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>Your Current Company</label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='currentCompany'
              placeholder=''
              onChange={(e) => onChange(e)}
              value={currentCompany}
            />
          </div>

          <div className='fv-row mb-8'>
            <label className='form-check form-check-inline'>
              <input
                className='form-check-input'
                type='checkbox'
                name='unemployed'
                value={unemployed ? 1 : 0}
                onChange={(e) => onChange(e)}
              />
              <span className='form-check-label fw-semibold text-gray-700 fs-base ms-1'>
                I am currently not employed
              </span>
            </label>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>Your Current Job Title</label>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='currentFunction'
              placeholder=''
              onChange={(e) => onChange(e)}
              value={currentFunction}
            />
          </div>

          <div class='d-flex flex-stack pt-15'>
            <div class='mr-2'>
              <button
                type='button'
                class='btn btn-lg btn-light-primary me-3'
                data-kt-stepper-action='previous'
              >
                <span class='svg-icon svg-icon-4 me-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      opacity='0.5'
                      x='6'
                      y='11'
                      width='13'
                      height='2'
                      rx='1'
                      fill='currentColor'
                    />
                    <path
                      d='M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                Previous
              </button>
            </div>
            <div>
              <button
                type='button'
                class='btn btn-lg btn-primary'
                data-kt-stepper-action='submit'
              >
                <span class='indicator-label'>
                  Submit
                  <span class='svg-icon svg-icon-4 ms-2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        x='18'
                        y='13'
                        width='13'
                        height='2'
                        rx='1'
                        transform='rotate(-180 18 13)'
                        fill='currentColor'
                      />
                      <path
                        d='M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                </span>
                <span class='indicator-progress'>
                  Please wait...
                  <span class='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              </button>
              <button
                type='button'
                class='btn btn-lg btn-primary'
                data-kt-stepper-action='next'
              >
                Continue
                <span class='svg-icon svg-icon-4 ms-1'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      opacity='0.5'
                      x='18'
                      y='13'
                      width='13'
                      height='2'
                      rx='1'
                      transform='rotate(-180 18 13)'
                      fill='currentColor'
                    />
                    <path
                      d='M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
