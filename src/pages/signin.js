import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check form input elements are valid (email and password)
  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (event) => {
    event.preventDefault();

    //firebase stuff here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        //push to the browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer display="hidden">
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit
              data-testid="sign-in"
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to REACT? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Form.Link
              onClick={() => {
                window.location.replace(
                  "https://www.youtube.com/embed/dQw4w9WgXcQ?&autoplay=1"
                );
              }}
            >
              Learn more.
            </Form.Link>
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
