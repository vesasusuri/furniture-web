import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import "./styles/banner.scss";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="info"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1>
          <FormattedMessage
            id="home-banner-title"
            defaultMessage="Furniture that everyone Loves"
          />
        </h1>
        <p>
          <FormattedMessage
            id="home-banner-text"
            defaultMessage="We have more than 5000+ Reviews and our customers on our furniture and quality products."
          />
        </p>
        <div className="links">
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="Buy-Now"
                defaultMessage="Buy Now"
              />
            }
          />
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="explore"
                defaultMessage="Explore"
              />
            }
          />
        </div>
      </div>

      <div className="inner-banner-photo"></div>
    </div>
  );
};
export default Banner;
