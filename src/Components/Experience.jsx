import React, { useEffect, useState } from "react";
import Job from "./Job";

function Experience() {
  const [jobsData, setJobsData] = useState([
    {
      startDate: "SEP 2023",
      endDate: "PRESENT",
      title: "Building Technician",
      companyName: "Intel Corporation",
      location: "Hillsboro, OR",
      description:
        "Full Stack (React, NodeJS, SQL/MongoDB, JSX/Tailwind)<ul><li>Added support for new merchant/storefront API integrations via webhooks</li><li>Implemented drag and drop in-house editor with support for default template values</li><li>Augmented magic link generation and link detection with regex</li>",
    },
    {
      startDate: "JUN 2023",
      endDate: "AUG 2023",
      title: "Software Engineering Intern",
      companyName: "OneText",
      location: "San Francisco",
      description:
        "Full Stack (React, NodeJS, SQL/MongoDB, JSX/Tailwind)<ul><li>Added support for new merchant/storefront API integrations via webhooks</li><li>Implemented drag and drop in-house editor with support for default template values</li><li>Augmented magic link generation and link detection with regex</li>",
    },
    {
      startDate: "JUN 2023",
      endDate: "AUG 2023",
      title: "Software Engineering Intern",
      companyName: "Poisson Games",
      location: "San Francisco",
      description:
        "Full Stack (React, NodeJS, SQL/MongoDB, JSX/Tailwind)<ul><li>Added support for new merchant/storefront API integrations via webhooks</li><li>Implemented drag and drop in-house editor with support for default template values</li><li>Augmented magic link generation and link detection with regex</li>",
    },
    {
      startDate: "JUN 2023",
      endDate: "AUG 2023",
      title: "Software Engineering Intern",
      companyName: "EagleRider",
      location: "San Francisco",
      description:
        "Full Stack (React, NodeJS, SQL/MongoDB, JSX/Tailwind)<ul><li>Added support for new merchant/storefront API integrations via webhooks</li><li>Implemented drag and drop in-house editor with support for default template values</li><li>Augmented magic link generation and link detection with regex</li>",
    },
    {
      startDate: "JUN 2023",
      endDate: "AUG 2023",
      title: "Software Engineering Intern",
      companyName: "pHin",
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
    <div className="bg-headerbg/30 backdrop-blur drop-shadow rounded">
      <h2 className="text-xl py-4 px-5"> EXPERIENCE </h2>
      <section className="bg-contentbg/30 px-5 py-4 text-md">
        {jobsData.map((job) => {
          return <Job props={job} key={job.companyName}></Job>;
        })}
      </section>
    </div>
  );
}

export default Experience;
