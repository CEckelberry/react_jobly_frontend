import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link } from "react-router-dom";
import {ListGroup, ListGroupItem} from "reactstrap";

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

    if (isLoading) {
        return <p>Loading....</p>;
      }

    return (
        <div>
            <ListGroup>
                {companies.map(company => (
                    <ListGroupItem> <Link to={`/companies/${company.name}`}>{company.name}</Link></ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}

export default CompaniesList;