import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link } from "react-router-dom";
import {ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col} from "reactstrap";
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

    if (isLoading) {
        return <p>Loading....</p>;
      }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    {jobs.map(job => (
                        <Card>
                        <CardBody>
                            <CardTitle><b>{job.title}</b></CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted" id="subtitle">{job.companyName}</CardSubtitle>
                                <CardText className="salary">Salary: {job.salary}</CardText>
                                <br></br>
                                <CardText className="equity">Equity: {job.equity !== null ? job.equity : 0}</CardText>
                                <Button>Apply</Button>
                        </CardBody>
                        </Card>
                    ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default JobsList;