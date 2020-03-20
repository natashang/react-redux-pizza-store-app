import React from "react";
import { ProgressBar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import getLinkInfo from "../utils/getLinkInfo";

import links from "../utils/links";

const Home = () => {
  const currLink = getLinkInfo(links, "Home");
  const progress = currLink.progress;

  return (
    <>
      <ProgressBar animated now={progress} />

      <h1>Pizza Builder</h1>
      <p>
        Welcome! Build your own pizza in seconds! We offer a wide selection of
        locally sourced ingredients. We also do delivery!{" "}
      </p>

      <Link to={currLink.next}>
        <Button>{currLink.label}</Button>
      </Link>

      <br />
      <br />

      <p>
        This project is hosted on GitHub Pages and is available for viewing.
      </p>
      <a href="https://github.com/natashang/react-redux-pizza-store-app">
        View code here
      </a>
    </>
  );
};

export default Home;
