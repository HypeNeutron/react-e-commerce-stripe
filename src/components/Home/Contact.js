import React from "react";
import styled from "styled-components";

const Contact = () => (
  <Wrapper>
    <div className="section-center">
      <h3>Join Our newsletter and get 20% off</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quo
        provident maxime tenetur nisi consectetur vitae fuga earum laudantium
        quis. Iure alias nobis error itaque ut similique accusantium facilis
        eveniet.
      </p>
      <form
        className="contact-form"
        action="https://formspree.io/f/myylkolv"
        method="POST">
        <input
          type="email"
          className="form-input"
          placeholder="enter-email"
          id="email"
          name="email"
          required
        />
        <button type="submit" className="submitBtn">
          subscribe
        </button>
      </form>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: 5rem 0;

  h3 {
    text-transform: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;

    .form-input,
    .submitBtn {
      font-size: 1rem;
      padding: 0.5rem 1rem;
      border: 2px solid var(--clr-black);
    }

    .form-input {
      color: var(--clr-grey-3);
      border-right: none;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
      ::placeholder {
        color: var(--clr-black);
        text-transform: capitalize;
      }
    }

    .submitBtn {
      color: var(--clr-black);
      cursor: pointer;
      background: var(--clr-primary-5);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      border-top-right-radius: var(--radius);
      border-bottom-right-radius: var(--radius);
      transition: var(--transition);
    }

    .submitBtn:hover {
      color: var(--clr-white);
    }
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
