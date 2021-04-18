import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import "./Profile.css"


function Profile(){
    const initialState = {
        username: "Username",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      }
      const [formData, setFormData] = useState(initialState)
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
          ...data,
          [name]: value
        }))
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        const { username, first_name, last_name, email, password } = formData;

        console.log("finished")
        setFormData(initialState)
      }



    return(
        <div>
        <Container>
            <Row>
                <Col className="welcome" sm="12" md={{ size: 6, offset: 3 }}>
                    <h1>Profile</h1>
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

                        <Button size="lg" block>Save Changes</Button>
                    </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>

        </div>
    )
}

export default Profile;