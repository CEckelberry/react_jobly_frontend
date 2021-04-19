import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link } from "react-router-dom";
import SearchForm from "./Search"
import {ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col} from "reactstrap";
import "./CompaniesList.css"

function CompaniesList(){
    const [isLoading, setIsLoading] = useState(true);
    const [companies, setCompanies] = useState([]);
    
    useEffect(() => {
        async function getCompanies(){
            let companies = await JoblyApi.getCompanies();
            setCompanies(companies)
            console.log(companies)
            setIsLoading(false);
        }
        getCompanies();
    }, []);

    async function search(name) {
        //console.log(`Searching for ${title}`)
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
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
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {companies.map(company => (
                            <Link to={`/companies/${company.handle}`}>
                            <Card> 
                                <CardBody>
                                    <img src={company.logoUrl}></img>
                                    <CardTitle tag="h5">
                                        {company.name}
                                    </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{company.description}</CardSubtitle>
                                </CardBody>
                            </Card>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CompaniesList;