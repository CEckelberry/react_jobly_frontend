import React, {useState, useEffect} from "react";
import JoblyApi from "./Api";
import { Link, useParams } from "react-router-dom";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

function CompanyJobList(){
    const { handle } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [company, setCompany] = useState([]);
    
    useEffect(() => {
        async function getCompany(){
            let company = await JoblyApi.getCompany(handle);
            setCompany(company)
            console.log(company)
            setIsLoading(false);
        }
        getCompany();
    }, []);

    if (isLoading) {
        return <p>Loading....</p>;
      }

    return(
        <h1>{company.name}</h1>
    )



}

export default CompanyJobList;