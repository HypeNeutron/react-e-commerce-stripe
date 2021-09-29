import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../../assets/hero-bcg.jpeg'
import heroBcg2 from '../../assets/hero-bcg-2.jpeg'

function Hero() {
  return (
    <Wrapper className='section-center'>
      <article className='content-container'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          commodi magnam aliquam. Quod eos necessitatibus inventore saepe
          dolorem neque! Obcaecati veritatis earum ipsam illum pariatur,
          perspiciatis aspernatur porro voluptatum quod.
        </p>
        <Link to='/products' className='btn btn--hero'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='mainImg' />

        <img src={heroBcg2} alt='person working' className='accentImg' />
      </article>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .content-container {
    p {
      max-width: 45em;
      line-height: 2;
      font-size: 1rem;
      margin-bottom: 2rem;
      color: var(--clr-grey-5);
    }
  }

  .img-container {
    display: none;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .content-container {
      h1 {
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.25rem;
      }
      .btn--hero {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
      }
    }

    .img-container {
      display: block;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 10%;
        height: 80%;
        background: var(--clr-primary-9);
        bottom: 0%;
        left: -8%;
        border-radius: var(--radius);
      }

      .mainImg {
        display: block;
        position: relative;
        width: 100%;
        height: 550px;
        border-radius: var(--radius);
        object-fit: cover;
      }
      .accentImg {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 250px;
        transform: translateX(-50%);
        border-radius: var(--radius);
      }
    }
  }
`
