import React from "react";
import PropTypes from "prop-types";

function Job({ props }) {
  return (
    <div>
      <h1>{props.startDate}</h1>
      <h1>{props.endDate}</h1>
      <h1>{props.title}</h1>
      <h1>{props.companyName}</h1>
      <h1>{props.location}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

Job.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  title: PropTypes.string,
  companyName: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
};

export default Job;
