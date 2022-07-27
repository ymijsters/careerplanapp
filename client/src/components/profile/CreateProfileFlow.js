import React, { useState } from "react";
import { ProfileAside } from "./ProfileAside";
import { PersonalDataStep } from "./PersonalDataStep";
import { createNextState } from "@reduxjs/toolkit";
import { CreateGoalStep } from "./CreateGoalStep";
import { AmbitionStep } from "./AmbitionStep";

export const CreateProfileFlow = () => {
  const [step, setStep] = useState(1);

  const nextStep = (next) => {
    console.log("In Next Step with Next: " + next);
    let newStep = step;
    if (next) {
      step++;
    } else {
      step--;
    }
    console.log("New step: " + step);
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
                  return (
                    <PersonalDataStep nextStep={(next) => nextStep(next)} />
                  );
                case 2:
                  return <AmbitionStep nextStep={(next) => nextStep(next)} />;
                case 3:
                  return <CreateGoalStep nextStep={(next) => nextStep(next)} />;
                default:
                  return <p>Default Return here</p>;
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};
