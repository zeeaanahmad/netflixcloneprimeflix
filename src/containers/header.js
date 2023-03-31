import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../mylogo.png";

export function HeaderContainer({ children, display }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="site logo" />
        <Header.ButtonLink to={ROUTES.SIGN_IN} display={display}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
