import React from "react";
import styled from "styled-components";
import avatar2 from "../img/avatar2.jpg";
import avatar3 from "../img/avatar3.jpg";
import avatar4 from "../img/avatar4.jpg";

import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span> Chef's Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={avatar2} alt="" />
            </div>
            <p>
            Chef Vikas Khanna:
              <span>
              "They smelled amazing so I almost had to try for myself."
              </span>
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar3} alt="" />
            </div>
            <p>
            Chef Gordon Ramsay:
              <span>
              "Love that these are made with real and organic ingredients, and i loves them!"
              </span>
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={avatar4} alt="" />
            </div>
            <p>
            Chef Sanjeev Kapoor:
             <span>"If feels good to eat something that makes us feel good."</span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles};
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 6vw;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
          span {
            color: #fc4958;
          }
        }
        ${imageZoomEffect};
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;