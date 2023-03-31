import React from "react";
import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles/>", () => {
  it("renders the <Profiles/> with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture
              src="/images/test.png"
              data-testid="profile-picture"
            />
            <Profiles.Name>Test</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders the <Profiles/> with populated data and a misc profile picture", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={() => {}}>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Test</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText("Who's watching?")).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText("Test")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
