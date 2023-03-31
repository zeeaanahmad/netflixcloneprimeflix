import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  Route: ({ children, path }) => children({ match: path === "/signup" }),
}));

describe("<Form />", () => {
  it("renders the <Form /> with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>
        <Form.Base>
          <Form.Input placeholder="Email address" />
          <Form.Input type="password" placeholder="Password" />
          <Form.Submit disabled type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more.
        </Form.TextSmall>
      </Form>
    );

    expect(
      getByText(
        "This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."
      )
    ).toBeTruthy();
    expect(getByText("Sign In Now")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("Sign In").disabled).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form/> with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is wrong.</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText("Your email address is wrong.")).toBeTruthy();
    expect(queryByText("Sign In").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
