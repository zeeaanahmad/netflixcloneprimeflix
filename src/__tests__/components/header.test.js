import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Header } from "../../components";

jest.mock("react-router-dom", () => ({
  Link: "Link",
}));

describe("<Header/>", () => {
  it("renders the basic <Header/> component with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="logo" />
          <Header.TextLink active="true">Hello I'm a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I'm a link!")).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the basic <Header/> component without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="logo" />
          <Header.ButtonLink>Sign In</Header.ButtonLink>
          <Header.TextLink active="false">Hello I'm a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );
    expect(getByText("Hello I'm a link!")).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the full <Header/> with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header src="joker1" dontShowBg>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src="/images/logo.svg" alt="site logo" />
            <Header.TextLink active={false} onClick={() => {}}>
              Shows
            </Header.TextLink>
            <Header.TextLink active onClick={() => {}}>
              Movies
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="/images/test.png" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="/images/test.png" />
                  <Header.TextLink>Test</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureTitle>Watch Joker Now</Header.FeatureTitle>
          <Header.Text>Forever alone in a crowd...</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );
    expect(getByTestId("search-input")).toBeTruthy();
    expect(getByTestId("search-input").value).toBe("Joker");
    fireEvent.change(getByTestId("search-input"), {
      target: { value: "Simpsons" },
    });
    fireEvent.click(getByTestId("search-click"));
    expect(getByText("Shows")).toBeTruthy();
    expect(getByText("Movies")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
    expect(getByText("Watch Joker Now")).toBeTruthy();
    expect(getByText("Sign out")).toBeTruthy();
    expect(getByText("Forever alone in a crowd...")).toBeTruthy();
    expect(getByText("Play")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
