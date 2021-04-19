import React from "react";
import {Card,CardText, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";

function JobCardList({jobs, applied}){

    return(
        <div>
            {jobs.map(job => (
                <Card>
                <CardBody>
                    <CardTitle><b>{job.title}</b></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" id="subtitle">{job.companyName}</CardSubtitle>
                        <CardText className="salary">Salary: {job.salary}</CardText>
                        <br></br>
                        <CardText className="equity">Equity: {job.equity !== null ? job.equity : 0}</CardText>
                        <Button color="success" className="applybutton">APPLY</Button>
                </CardBody>
                </Card>
            ))}
        </div>
    )

}

export default JobCardList;