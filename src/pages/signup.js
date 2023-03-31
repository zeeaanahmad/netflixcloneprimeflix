import React, { useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check form input elements are valid (email and password)
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignUp = (event) => {
    event.preventDefault();

    //firebase stuff
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
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
              data-testid="sign-up"
              disabled={isInvalid}
              type="submit"
            >
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user?
              <Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
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
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;
