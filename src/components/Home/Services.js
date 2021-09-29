import React from "react";
import styled from "styled-components";
import { services } from "../../utils/Data";

const Services = () => (
  <Wrapper>
    <div className="section-center">
      <article className="header-container">
        <h3>
          custom furniture <br />
          built only for you
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo
          delectus iure quis, dolorem recusandae aliquam ratione, cum, voluptas
          minus tenetur pariatur repellendus alias non! Reiciendis, explicabo
          libero. Ipsa, rerum.
        </p>
      </article>
      <div className="servicesCard-container">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article key={id} className="servicesCard">
              <span className="icon">{icon}</span>
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.section`
  padding: 5rem 0;
  background: var(--clr-primary-10);

  h3,
  h4 {
    color: var(--clr-primary-1);
  }

  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  .header-container > h3 {
    margin-bottom: 2rem;
  }

  .servicesCard-container {
    display: grid;
    margin-top: 4rem;
    gap: 2.5rem;
  }

  .servicesCard {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);

    span.icon {
      display: grid;
      width: 4rem;
      height: 4rem;
      margin: 0 auto;
      place-items: center;
      margin-bottom: 1rem;
      border-radius: 50%;
      background: var(--clr-primary-10);
      color: var(--clr-primary-1);
      svg {
        font-size: 2rem;
      }
    }

    p {
      color: var(--clr-primary-2);
    }
  }

  @media (min-width: 576px) {
    .servicesCard-container {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }

  @media (min-width: 992px) {
    .header-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
