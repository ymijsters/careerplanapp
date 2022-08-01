import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import goal, { getGoals, getStockGoals } from "../../reducers/goal";
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
      if (!goals) dispatch(getGoals());
      //Update formData with current goals contents
      if (!loading && goals) {
        const goalData = { ...formData };
        //Add retreived goals to FormData
        goals.forEach((goal) => {
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
      if (!stockGoals) dispatch(getStockGoals());
      //Update formData with current profile contents
      if (!loading && stockGoals) {
        const goalData = { ...formData };
        goalData.allStockGoals = stockGoals;
        setFormData(goalData);
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading, goals, stockGoals, getGoals, getStockGoals]);

  const { selectedStockGoals, allStockGoals, customGoals } = formData;

  const onChangeCheckbox = (e, stockGoal) => {
    {
      //Moved in-line because some browser extension hijacks the checkbox
      e.preventDefault();
      let newStockGoals = [...selectedStockGoals];
      let removed = false;
      //Check if item in list and remove
      newStockGoals = newStockGoals.filter((newStockGoal) => {
        if (stockGoal._id === newStockGoal._id) {
          removed = true;
          return false;
        }
        return true;
      });
      //If no item was removed, add item as new
      if (!removed) {
        newStockGoals.push(stockGoal);
      }
      setFormData({
        ...formData,
        selectedStockGoals: newStockGoals,
      });
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
          {allStockGoals.map((stockGoal, i) => {
            //Check if stockGoal should be selected
            let selected = false;
            selectedStockGoals.forEach((selectedGoal) => {
              if (selectedGoal.name === stockGoal.name) {
                selected = true;
              }
            });
            return (
              <label className='d-flex flex-stack mb-5 cursor-pointer' key={i}>
                <span className='d-flex align-items-center me-2'>
                  <span className='symbol symbol-50px me-6'>
                    <span
                      className='symbol-label'
                      style={{ backgroundColor: "#" + stockGoal.color }}
                    >
                      <span className='svg-icon svg-icon-1 svg-icon-primary'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          ....
                        </svg>
                      </span>
                    </span>
                  </span>

                  <span className='d-flex flex-column'>
                    <span className='fw-bold fs-6'>{stockGoal.name}</span>
                    <span className='fs-7 text-muted'>
                      {stockGoal.description}
                    </span>
                  </span>
                </span>

                <span className='form-check form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    name='category'
                    checked={selected}
                    value={selected}
                    onChange={(e) => onChangeCheckbox(e, stockGoal)}
                  />
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </form>
  );
};
