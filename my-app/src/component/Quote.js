import React from "react";
import "./Quote.css";

export default function Quote() {
  return (
    <div className="quotes__container">
      <p className="quotes__text">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="svg-inline--fa fa-quote-left icon__quote"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
          ></path>
        </svg>
        Certain things catch your eye, but pursue only those that capture the
        heart.
      </p>
      <h1 className="card__author"> Ancient Indian Proverb</h1>
    </div>
  );
}
