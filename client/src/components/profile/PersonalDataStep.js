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
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Billing is issued based on your selected account type'
              ></i>
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              Before you dive in, please tell us a little about yourself. Review
              the &nbsp;
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
        </div>
      </div>
    </form>
  );
};
