export default function selectionFilter({ series, films } = []) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series?.filter((data) => data.genre === "documentaries"),
      },
      {
        title: "Comedies",
        data: series?.filter((data) => data.genre === "comedies"),
      },
      {
        title: "Children",
        data: series?.filter((data) => data.genre === "children"),
      },
      {
        title: "Crime",
        data: series?.filter((data) => data.genre === "crime"),
      },
      {
        title: "Feel Good",
        data: series?.filter((data) => data.genre === "feel-good"),
      },
    ],
    films: [
      {
        title: "Drama",
        data: films?.filter((data) => data.genre === "drama"),
      },
      {
        title: "Thriller",
        data: films?.filter((data) => data.genre === "thriller"),
      },
      {
        title: "Children",
        data: films?.filter((data) => data.genre === "children"),
      },
      {
        title: "Suspense",
        data: films?.filter((data) => data.genre === "suspense"),
      },
      {
        title: "Romance",
        data: films?.filter((data) => data.genre === "romance"),
      },
    ],
  };
}
