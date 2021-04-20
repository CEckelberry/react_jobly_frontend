import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import UserContext from "./UserContext";
import "./Home.css"

function Home() {
    const { currentUser } = useContext(UserContext);

    function loggedOutHome(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col className="welcome" sm="12" md={{ size: 6, offset: 3 }}>
                            <h1>Jobly</h1>
                            <p>All the jobs in one, convenient place.</p>
                            <div className="links">
                                <Link className="btn btn-primary font-weight-bold mr-3" to="/login">Log in</Link>
                                <Link className="btn btn-primary font-weight-bold" to="/signup">Sign up</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


    function loggedInHome(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col className="welcome" sm="12" md={{ size: 6, offset: 3 }}>
                            <h1>Jobly</h1>
                            <p>All the jobs in one, convenient place.</p>
                            <h3>Welcome Back, ${currentUser.username}!</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

  


    return (
        <div>
          {currentUser ? loggedInHome() : loggedOutHome()}
        </div>
      )
}

export default Home;