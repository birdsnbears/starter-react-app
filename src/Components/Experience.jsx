import React, { useEffect, useState } from "react";
import "./Experience.css";
import Job from "./Job";

function Experience() {
  const [jobsData, setJobsData] = useState([
    {
      startDate: "JUN 2023",
      endDate: "AUG 2023",
      title: "Software Engineering Intern",
      companyName: "OneText",
      location: "San Francisco",
      description:
        "Full Stack (React, NodeJS, SQL/MongoDB, JSX/Tailwind)<ul><li>Added support for new merchant/storefront API integrations via webhooks</li><li>Implemented drag and drop in-house editor with support for default template values</li><li>Augmented magic link generation and link detection with regex</li>",
    },
  ]);

  // useEffect(() => {
  //   fetch(`http://localhost:${process.env.PORT || 3000}/jobs.json`).then((jobs) => {
  //     setJobsData(jobs);
  //   });
  // }, []);

  return (
    <div>
      <h1> EXPERIENCE </h1>
      {jobsData.map((job) => {
        return <Job props={job} key={job.companyName}></Job>;
      })}
    </div>
  );
}

export default Experience;
