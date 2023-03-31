import React from "react";
import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

const Browse = () => {
  //get the series and movies
  const { series } = useContent("series");
  const { films } = useContent("films");

  //get slide info
  const slides = selectionFilter({ series, films });

  //pass it to the browse container
  return <BrowseContainer slides={slides} />;
};

export default Browse;
