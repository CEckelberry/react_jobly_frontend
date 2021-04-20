import React, { useContext, useState } from "react";
import Job from "./Job"


function JobCardList({jobs, apply}){
   

    return(
        <div>
            {jobs.map(job => (
                <Job 
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            ))}
        </div>
    )

}

export default JobCardList;