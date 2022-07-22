import React, { useState } from "react";
import { ProfileAside } from "./ProfileAside";
import { PersonalDataStep } from "./PersonalDataStep";
import { createNextState } from "@reduxjs/toolkit";

export const CreateProfileFlow = () => {
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    let newStep = 1;
    if (step == 1) {
      newStep = 2;
    }
    setStep(newStep);
  };

  return (
    <div
      className='d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep'
      id='kt_create_account_stepper'
    >
      <ProfileAside step={step} />
      <div className='d-flex flex-column flex-lg-row-fluid py-10'>
        <div className='d-flex flex-center flex-column flex-column-fluid'>
          <div className='w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto'>
            {(() => {
              switch (step) {
                case 1:
                  return <PersonalDataStep />;
                default:
                  return <p>Default Return here</p>;
              }
            })()}
            <p onClick={() => nextStep()}>Click for next step</p>
          </div>
        </div>
      </div>
    </div>
  );
};
