import React from "react";
import bg from "../../img/auth-bg.png";

export const ProfileAside = (props) => {
  const { step } = props;
  console.log(step);

  return (
    <div className='d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px'>
      <div
        className='d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center'
        style={{
          backgroundImage: `url("${bg}")`,
        }}
      >
        <div className='d-flex flex-center py-10 py-lg-20 mt-lg-20'>
          <a href='../../demo11/dist/index.html'>
            <img alt='Logo' className='h-70px' />
          </a>
        </div>
        <div className='d-flex flex-row-fluid justify-content-center p-10'>
          <div className='stepper-nav'>
            <div
              className={`stepper-item ${step == 1 ? "current" : ""}`}
              data-kt-stepper-element='nav'
            >
              <div className='stepper-wrapper'>
                <div className='stepper-icon rounded-3'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>
                <div className='stepper-label'>
                  <h3 className='stepper-title fs-2'>Account Type</h3>
                  <div className='stepper-desc fw-normal'>
                    Select your account type
                  </div>
                </div>
              </div>
              <div className='stepper-line h-40px'></div>
            </div>

            <div
              className={`stepper-item ${step == 2 ? "current" : ""}`}
              data-kt-stepper-element='nav'
            >
              <div className='stepper-wrapper'>
                <div className='stepper-icon rounded-3'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>
                <div className='stepper-label'>
                  <h3 className='stepper-title fs-2'>Account Settings</h3>
                  <div className='stepper-desc fw-normal'>
                    Setup your account settings
                  </div>
                </div>
              </div>

              <div className='stepper-line h-40px'></div>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-wrapper'>
                <div className='stepper-icon'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>

                <div className='stepper-label'>
                  <h3 className='stepper-title fs-2'>Business Details</h3>
                  <div className='stepper-desc fw-normal'>
                    Setup your business details
                  </div>
                </div>
              </div>
              <div className='stepper-line h-40px'></div>
            </div>
            <div className='stepper-item' data-kt-stepper-element='nav'>
              <div className='stepper-wrapper'>
                <div className='stepper-icon'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Completed</h3>
                  <div className='stepper-desc fw-normal'>
                    Your account is created
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-center flex-wrap px-5 py-10'>
          <div className='d-flex fw-normal'>
            <a
              href='https://keenthemes.com'
              className='text-success px-5'
              target='_blank'
            >
              Terms
            </a>
            <a
              href='https://devs.keenthemes.com'
              className='text-success px-5'
              target='_blank'
            >
              Plans
            </a>
            <a
              href='https://1.envato.market/EA4JP'
              className='text-success px-5'
              target='_blank'
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
