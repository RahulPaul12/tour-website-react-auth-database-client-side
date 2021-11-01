import React from 'react';
import { Col, Form, Row ,Button} from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';

const Login = () => {

    const {signinusingGoogle} = Useauth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    const handlegooglesignin = () => {
        signinusingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        
            <div className="w-50 mx-auto">
                <h2 className="text-center">Login</h2>
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                </Form>
                <p className="text-center">New Here? <Link to="/register">Create new</Link></p>
                <div className="text-center">----------or----------</div>
                <Button className="btn btn-success mb-3"
                    onClick={handlegooglesignin}
                    style={{
                        margin:'10%'
                        
                    }}
                >Google Sign In</Button>
            </div>
       
    );

};

export default Login;