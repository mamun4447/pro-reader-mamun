import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Main from "./components/layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
]);

export default router;
