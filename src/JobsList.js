import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link } from "react-router-dom";
import {Container, Row, Col} from "reactstrap";
import SearchForm from "./Search"
import JobCard from "./JobCard"
import "./JobsList.css"

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

      useEffect(function getAllJobsOnMount() {
    console.debug("JobList useEffect getAllJobsOnMount");
    search();
  }, []);

    async function search(title) {
        //console.log(`Searching for ${title}`)
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
      }

    if (isLoading) {
        return <p>Loading....</p>;
      }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <SearchForm searchFor={search}/>
                        {jobs.length
                            ? <JobCard jobs={jobs} />
                            :<p className="lead">Sorry, no results were found!</p>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobsList;