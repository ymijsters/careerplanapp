import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getCurrentProfile } from "../../reducers/profile";
import { Alert } from "../layout/Alert";

export const AmbitionStep = () => {
  const [formData, setFormData] = useState(initialState);

  const { profile, loading } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      //Load the current profile if it wasn't loaded yet (only when returning to profilecreation with the same account)
      if (!profile) dispatch(getCurrentProfile());
      //Update formData with current profile contents
      if (!loading && profile) {
        const profileData = { ...initialState };
        for (const key in profile) {
          if (key in profileData) profileData[key] = profile[key];
        }
        setFormData(profileData);
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading, getCurrentProfile, profile]);

  const { ambitionStatement } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      //Dispatch profile to API submission
      await dispatch(
        createProfile(name, currentCompany, unemployed, currentFunction, () => {
          props.nextStep();
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className='my-auto pb-5'
      noValidate='novalidate'
      id='kt_create_account_form'
      data-kt-redirect-url='../../demo11/dist/account/overview.html'
    >
      <div className='current' data-kt-stepper-element='content'>
        <div className='w-100'>
          <Alert />
          <div className='pb-10 pb-lg-15'>
            <h2 className='fw-bold d-flex align-items-center text-dark'>
              Your personal ambition statement
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              Write your personal ambition statement. This exercise helps you
              set a dot on the horizon of what your perfect career looks like
              and gives you an aim for short-term goals. When writing your
              statement, do not consider limitations, but instead focus solely
              on your ideal career.
            </div>
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>
              Describe your desired career in 3-5 years without considering any
              limitations or blockers.
            </label>
            <textarea
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='ambitionStatement'
              placeholder=''
              onChange={(e) => onChange(e)}
              value={ambitionStatement}
              required
              style={{ height: "200px" }}
            />
          </div>

          <div className='d-flex flex-stack pt-15'>
            <div>
              <button
                type='button'
                className='btn btn-lg btn-primary'
                onClick={() => onSubmit()}
              >
                {ambitionStatement ? "Continue" : "Skip"}
                <span className='svg-icon svg-icon-4 ms-1'>
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
