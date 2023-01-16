import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./products.scss";
import { Data1 } from "./data";
import { BsArrowRight } from "react-icons/bs";
import StyledLink from '../../shared/StyledLink/StyledLink'

const Products = () => {

  return (
    <div className="OurTeam">
      {Data1.map((props) => {
          return (
            <div className="inner-col">
              <div className="img-container">
                <div
                  className="img"
                  style={{ content: `url(${props.img})` }}
                ></div>
              </div>
              <div className="info">
                <div className="top">
                  <div className="date">
                    {props.day} {props.month} {props.year}
                  </div>
                  <h6>{props.title}</h6>
                </div>
                <Link to={props.to} className="hover-button2">
                  <FormattedMessage
                    id="Learn More"
                    defaultMessage="Learn More"
                  />
                  <BsArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Products;
