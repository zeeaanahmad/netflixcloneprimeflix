import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((data) => (
        <Accordion.Item key={data.id}>
          <Accordion.Header>{data.header}</Accordion.Header>
          <Accordion.Body>{data.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Get started</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}
