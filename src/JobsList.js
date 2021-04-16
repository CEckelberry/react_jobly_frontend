import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link } from "react-router-dom";
import {ListGroup, ListGroupItem} from "reactstrap";

function JobsList() {
    const [isLoading, setIsLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        async function getJobs(){
            let jobs = await JoblyApi.getJobs();
            setJobs(jobs)
            console.log(jobs)
            setIsLoading(false);
        }
        getJobs();
    }, []);

    if (isLoading) {
        return <p>Loading....</p>;
      }

    return (
        <div>
            <ListGroup>
                {jobs.map(job => (
                    <ListGroupItem>{job.title}</ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}

export default JobsList;