
import React from 'react';

const Alerts = (props) => {
  const changeCase = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && props.alert.type && props.alert.msg && (
      <div className={`container alert alert-${props.alert.type}`} role="alert">
        <strong>{changeCase(props.alert.type)}</strong> {props.alert.msg}
      </div>
    )
  );
};

export default Alerts;
