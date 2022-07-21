import React from "react";
import { ProfileAside } from "./ProfileAside";

export const CreateProfileFlow = () => {
  return (
    <div
      className='d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep'
      id='kt_create_account_stepper'
    >
      <ProfileAside />
      <div className='d-flex flex-column flex-lg-row-fluid py-10'>
        <div className='d-flex flex-center flex-column flex-column-fluid'>
          <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'>
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
          </div>
        </div>
      </div>
    </div>
  );
};
