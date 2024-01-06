
import React from "react";
import "./NonResponsive.css";

export const NonResponsive = () => {
  return (
    <section className="non-responsive">
    <div className="cool-page">
      <h1 className="title">
        The developer of this website was too lazy to make it responsive.
      </h1>
      <p className="message">
        Kindly open the website on a PC (width greater than 1400px).
      </p>
    </div>
    </section>
  );
};
