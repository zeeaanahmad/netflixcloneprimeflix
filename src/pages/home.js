import React from "react";
import { OptForm } from "../components";
import { Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";

const Home = () => {
  return (
    <>
      <HeaderContainer display="visible">
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get started</OptForm.Button>
            <OptForm.Break />
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
