import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

//jest mock
jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

test("renders the home page", () => {
  const { getByText, getAllByPlaceholderText, getAllByText } = render(<Home />);
  expect(getByText("Unlimited movies, TV shows, and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel anytime.")).toBeTruthy();
  expect(
    getAllByText(
      "Ready to watch? Enter your email to create or restart your membership."
    )
  ).toBeTruthy();
  expect(getAllByText("Get started")).toBeTruthy();
  expect(getAllByPlaceholderText("Email address")).toBeTruthy();
});
