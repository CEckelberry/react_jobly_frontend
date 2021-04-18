import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Home.css"

function Home() {
    let loggedIn = true;
    if(!loggedIn){
        return(
            <div>
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>
                <button>Log in</button>
                <button>Sign up</button>
            </div>
        );
    }

    return(
    <div>
        <Container>
            <Row>
                <Col className="welcome" sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Jobly</h1>
                    <p>All the jobs in one, convenient place.</p>
                    <h3>Welcome Back, User!</h3>
                </Col>
            </Row>
    </Container>
    </div>
    );
}

export default Home;