import React from "react";
import { render } from "@testing-library/react";
import { Browse } from "../../pages";
import { FirebaseContext } from "../../context/firebase";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  Link: "Link",
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    currentUser: {
      displayName: "Test",
      photoURL: 1,
      email: "test@gmail.com",
    },
    signOut: jest.fn(() => Promise.resolve("I am signed out!")),
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve("I get content!")),
      add: jest.fn(() => Promise.resolve("I add content!")),
    })),
  })),
};

jest.mock("../../utils/selection-filter", () => {
  return jest.fn().mockImplementation(() => {
    const series = [
      {
        title: "Documentaries",
        data: [
          {
            id: "series-1x",
            title: "Tiger King",
            description:
              "An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.",
            genre: "documentaries",
            maturity: "18",
            slug: "tiger-king",
          },
        ],
      },
    ];
    const films = [
      {
        title: "Suspense",
        data: [
          {
            id: "film-1x",
            title: "Amanda Knox",
            description:
              "Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.",
            genre: "documentaries",
            maturity: "12",
            slug: "amanda-knox",
          },
        ],
      },
    ];
    const slides = { series, films };
    return { selectionFilter: { slides } };
  });
});

describe("<Browse/>", () => {
  it("renders the <Browse/> page", () => {
    const { container } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Browse />
        </FirebaseContext.Provider>
      </Router>
    );
  });
});
