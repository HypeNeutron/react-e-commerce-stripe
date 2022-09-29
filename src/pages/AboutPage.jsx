import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb title=" About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, laboriosam. Ipsa voluptatibus, quo at voluptatem
              vitae placeat nisi consectetur cum doloribus Numquam eos
              consectetur velit eligendi aliquid ab totam quam corrupti
              blanditiis, quibusdam aliquam quo aut a voluptatibus! Et, sapiente
              a. Nobis porro laudantium aperiam odit veniam repellat cum
              possimus.
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
