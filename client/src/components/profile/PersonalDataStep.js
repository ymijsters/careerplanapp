import React from "react";

export const PersonalDataStep = () => {
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
              Choose Account Type
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='Billing is issued based on your selected account type'
              ></i>
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              If you need more info, please check out
              <a href='#' className='link-primary fw-bold'>
                Help Page
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
