import React from "react";

export const PersonalDataStep = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    currentCompany: "",
    unemployed: false,
    currentFunction: "",
  });

  const { name, dateOfBirth, currentCompany, unemployed, currentFunction } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
              name='account_name'
              placeholder=''
              onChange={(e) => onChange(e)}
              value={name}
            />
          </div>

          <div className='mb-10 fv-row'>
            <label className='form-label mb-3'>Date of Birth</label>
            <input
              className='form-control form-control-solid'
              name='calendar_event_start_date'
              placeholder='Pick a start date'
              id='kt_calendar_datepicker_start_date'
            />
          </div>
        </div>
      </div>
    </form>
  );
};
