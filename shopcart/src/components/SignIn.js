import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Form, Button } from "react-bootstrap";

function SignIn() {
  const [login, setLogin] = useState(false); // set up login
  const [data, setData] = useState({});      // set up fb data
  const [picture, setPicture] = useState(''); // set up fb profile image

  // The response handler for Facebook login
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture?.data?.url || '');
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  // A simple Login Form using React Bootstrap
  function LoginForm() {
    return (
      <Form className="border mt-3 mb-5 p-3 bg-white">
        <Form.Group className="m-2" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group className="m-2" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>

        <Button type="submit" variant="success" className="my-3">
          Login
        </Button>
      </Form>
    );
  }

  return (
    <div className="container">
      <Card style={{ width: '800px' }} className="mx-auto mt-5">
        <Card.Header className="pb-4">
          <h1>Sign In</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {!login && (
              <>
                <h3>Please login using one of the following:</h3>
                {/* Local Login Form */}
                <LoginForm />

                {/* Facebook Login Button */}
                <FacebookLogin
                  appId="2517126948644877"  // <-- your Facebook app ID
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                />
              </>
            )}

            {login && <Home fbpic={picture} fbdata={data} />}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

// A separate Home component to show user info after login
function Home({ fbpic, fbdata }) {
  return (
    <>
      <img src={fbpic} alt={fbdata.name} style={{ borderRadius: '50%' }} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <p className="my-5">This is the home page of the app.</p>
    </>
  );
}

export default SignIn;
