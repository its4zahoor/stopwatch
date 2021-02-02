import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="about-me">
        Made by&nbsp;
        <a
          href="https://linkedin.com/in/its4zahoor"
          target="_blank"
          rel="noreferrer"
        >
          Zahoor
        </a>
      </div>
      <div className="source-code-link">
        <a
          href="https://github.com/its4zahoor/stopwatch"
          target="_blank"
          rel="noreferrer"
        >
          Source Code
        </a>
        &nbsp;on GitHub
      </div>
    </footer>
  );
}

export default Footer;
