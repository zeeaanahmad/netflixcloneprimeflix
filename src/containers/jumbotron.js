import React from "react";
import { Jumbotron } from "../components";
import jumboData from "../fixtures/jumbo";

export function JumbotronContainer() {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((data) => (
          <Jumbotron key={data.id} direction={data.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{data.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={data.image} alt={data.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </div>
  );
}
