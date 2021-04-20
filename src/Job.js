import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import {Card,CardText, CardBody, CardTitle, CardSubtitle, Button} from "reactstrap";

function Job({id, title, salary, equity, companyName}){
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();
  
    React.useEffect(function updateAppliedStatus() {
      console.debug("JobCard useEffect updateAppliedStatus", "id=", id);
  
      setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);
  
    /** Apply for a job */
    async function handleApply(evt) {
      if (hasAppliedToJob(id)) return;
      applyToJob(id);
      setApplied(true);
    }

    return(
        <div> {applied}
            <Card>
                <CardBody key={id} id={id}>
                    <CardTitle><b>{title}</b></CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted" id="subtitle">{companyName}</CardSubtitle>
                        <CardText className="salary">Salary: {salary}</CardText>
                        <br></br>
                        <CardText className="equity">Equity: {equity !== null ? equity : 0}</CardText>
                        <Button color="success" className="applybutton" onClick={handleApply} disabled={applied}>{applied ? "Applied" : "Apply"}</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Job;