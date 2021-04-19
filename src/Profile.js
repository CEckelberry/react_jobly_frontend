import React, { useState, useContext } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import UserContext from "./UserContext";
import Alert from "./Alert"
import JoblyApi from "./Api"
import "./Profile.css";


function Profile(){

      const { currentUser, setCurrentUser } = useContext(UserContext);
      const [formErrors, setFormErrors] = useState([]);
      const [saveConfirmed, setSaveConfirmed] = useState(false);

      const [formData, setFormData] = useState({
        firstName: currentUser.first_name,
        lastName: currentUser.last_name,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
      })

      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }));
        setFormErrors([]);
      }

      async function handleSubmit(e){
        e.preventDefault();
        let profileData = {
          firstName: formData.first_name,
          lastName: formData.last_name,
          email: formData.email,
          password: formData.password,
        }
        let username = formData.username;
        let updatedUser;

        try {
          updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
          debugger;
          setFormErrors(errors);
          return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);
    
        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
      }



    return(
        <div>
        <Container>
            <Row>
                <Col className="welcome" sm="12" md={{ size: 6, offset: 3 }}>
                    <h1 className="profile">Profile</h1>
                    <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="item">Username:</Label>
                        <p>Username</p>

                        <Label for="first_name">First Name:</Label>
                        <Input type="text" name="first_name" id="first_name" placeholder="first_name" value={formData.name} onChange={handleChange}/>

                        <Label for="last_name">Last Name:</Label>
                        <Input type="text" name="last_name" id="last_name" placeholder="last_name" value={formData.description} onChange={handleChange}/>

                        <Label for="email">Email:</Label>
                        <Input type="email" name="email" id="email" placeholder="email" value={formData.recipe} onChange={handleChange}/>

                        <Label for="password">Enter Password to Confirm Changes:</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={formData.serve} onChange={handleChange}/>

                        {formErrors.length
                          ? <Alert type="danger" messages={formErrors} />
                          : null}

                        {saveConfirmed
                            ?
                            <Alert type="success" messages={["Updated successfully."]} />
                            : null}


                        <Button size="lg" block onClick={handleSubmit}>Save Changes</Button>
                    </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default Profile;