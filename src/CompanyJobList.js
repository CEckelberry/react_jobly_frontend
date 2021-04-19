import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link, useParams } from "react-router-dom";
import JobCard from "./JobCard"
import {Container, Row, Col} from 'reactstrap';
import "./CompanyJobList.css"

function CompanyJobList(){
    const { handle } = useParams();

    console.debug("CompanyDetail", "handle=", handle);

    const [company, setCompany] = useState(null);
    
    useEffect(() => {
        async function PullCompany(){
            console.log("in getCompany() function")
            let company = await JoblyApi.getCompany(handle);
            setCompany(company)
            console.log(company)
        }
        PullCompany();
    }, [handle]);

    if (!company) return <h1>Loading....</h1>;

    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="companyName">{company.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5 className="text-muted">{company.description}</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <JobCard jobs={company.jobs}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )



}

export default CompanyJobList;