import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, getStockGoals } from "../../reducers/goal";
import { Alert } from "../layout/Alert";

const initialState = {
  selectedStockGoals: [],
  customGoals: [],
  allStockGoals: [],
};

export const CreateGoalStep = () => {
  const [formData, setFormData] = useState(initialState);

  const { goals, stockGoals, loading } = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      //Load the current goals if it wasn't loaded yet (only when returning to profilecreation with the same account)
      //NOTE: This might not work if a person doesn't have goals (As they will reload continuously) --> Check!
      if (goals.length == 0) dispatch(getGoals());
      //Update formData with current goals contents
      if (!loading && goals) {
        const goalData = { ...formData };
        //Add retreived goals to FormData
        goals.forEach((goal) => {
          console.log(goal);
          //Differentiate between stockgoals that have been selected and normal goals
          if (goal.stockgoal) {
            //Check if the goal is already in FormData (then don't add)
            if (
              goalData.selectedStockGoals.filter((stockGoal) => {
                return goal.id === stockGoal.id;
              }).length == 0
            ) {
              goalData.selectedStockGoals.push(goal);
            }
          }
          //Now check the same for custom goals
          else {
            console.log("This is a custom goal");
            //Check if the goal is already in FormData (then don't add)
            if (
              goalData.customGoals.filter((storedGoal) => {
                return goal.id === storedGoal.id;
              }).length == 0
            ) {
              goalData.customGoals.push(goal);
            }
          }
        });
        setFormData(goalData);
      }
      //Load the current profile if it wasn't loaded yet (only when returning to profilecreation with the same account)
      if (stockGoals.length == 0) dispatch(getStockGoals());
      //Update formData with current profile contents
      if (!loading && stockGoals) {
        const goalData = { ...formData };
        goalData.allStockGoals = stockGoals;
        setFormData(goalData);
      }
      console.log("Formdata");
      console.log(formData);
    } catch (err) {
      console.log(err);
    }
  }, [loading, goals, stockGoals, getGoals, getStockGoals]);

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
              Who are you?
            </h2>
            <div className='text-muted fw-semibold fs-6'>
              Before you dive in, please tell us a little about yourself. Review
              our&nbsp;
              <a href='#' className='link-primary fw-bold'>
                Privacy Statement
              </a>
              &nbsp;to see how we keep your data save.
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
