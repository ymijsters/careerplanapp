import React from "react";

export const Aside = () => {
  return (
    <div class='d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px'>
      <div
        class='d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center'
        style='background-image: url(assets/media/misc/auth-bg.png)'
      >
        <div class='d-flex flex-center py-10 py-lg-20 mt-lg-20'>
          <a href='../../demo11/dist/index.html'>
            <img
              alt='Logo'
              src='assets/media/logos/custom-1.png'
              class='h-70px'
            />
          </a>
        </div>
        <div class='d-flex flex-row-fluid justify-content-center p-10'>
          <div class='stepper-nav'>
            <div class='stepper-item current' data-kt-stepper-element='nav'>
              <div class='stepper-wrapper'>
                <div class='stepper-icon rounded-3'>
                  <i class='stepper-check fas fa-check'></i>
                  <span class='stepper-number'>1</span>
                </div>
                <div class='stepper-label'>
                  <h3 class='stepper-title fs-2'>Account Type</h3>
                  <div class='stepper-desc fw-normal'>
                    Select your account type
                  </div>
                </div>
              </div>
              <div class='stepper-line h-40px'></div>
            </div>

            <div class='stepper-item' data-kt-stepper-element='nav'>
              <div class='stepper-wrapper'>
                <div class='stepper-icon rounded-3'>
                  <i class='stepper-check fas fa-check'></i>
                  <span class='stepper-number'>2</span>
                </div>
                <div class='stepper-label'>
                  <h3 class='stepper-title fs-2'>Account Settings</h3>
                  <div class='stepper-desc fw-normal'>
                    Setup your account settings
                  </div>
                </div>
              </div>

              <div class='stepper-line h-40px'></div>
            </div>

            <div class='stepper-item' data-kt-stepper-element='nav'>
              <div class='stepper-wrapper'>
                <div class='stepper-icon'>
                  <i class='stepper-check fas fa-check'></i>
                  <span class='stepper-number'>3</span>
                </div>

                <div class='stepper-label'>
                  <h3 class='stepper-title fs-2'>Business Details</h3>
                  <div class='stepper-desc fw-normal'>
                    Setup your business details
                  </div>
                </div>
              </div>
              <div class='stepper-line h-40px'></div>
            </div>
            <div class='stepper-item' data-kt-stepper-element='nav'>
              <div class='stepper-wrapper'>
                <div class='stepper-icon'>
                  <i class='stepper-check fas fa-check'></i>
                  <span class='stepper-number'>4</span>
                </div>
                <div class='stepper-label'>
                  <h3 class='stepper-title'>Completed</h3>
                  <div class='stepper-desc fw-normal'>
                    Your account is created
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='d-flex flex-center flex-wrap px-5 py-10'>
          <div class='d-flex fw-normal'>
            <a
              href='https://keenthemes.com'
              class='text-success px-5'
              target='_blank'
            >
              Terms
            </a>
            <a
              href='https://devs.keenthemes.com'
              class='text-success px-5'
              target='_blank'
            >
              Plans
            </a>
            <a
              href='https://1.envato.market/EA4JP'
              class='text-success px-5'
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
