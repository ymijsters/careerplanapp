import React from "react";
import { ProfileAside } from "./ProfileAside";

export const CreateProfileFlow = () => {
  const [step, setStep] = useState({
    step: 1,
  });

  return (
    <div
      className='d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep'
      id='kt_create_account_stepper'
    >
      <ProfileAside />
      <div className='d-flex flex-column flex-lg-row-fluid py-10'>
        <div className='d-flex flex-center flex-column flex-column-fluid'>
          <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'>
            {() => {
              switch (step) {
                case 1:
                  return <PersonalDataStep />;
              }
            }}
          </div>
        </div>
      </div>
    </div>
  );
};
