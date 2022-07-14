import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  console.log(alerts);
  let alertDiv;
  if (alerts !== null && alerts.length > 0) {
    alerts.map((alert) => {
      alertDiv += (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      );
    });
  }
  return alertDiv;
};
