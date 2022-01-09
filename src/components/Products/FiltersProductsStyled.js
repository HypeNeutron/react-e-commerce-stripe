import styled from 'styled-components';

export default styled.section`
  .filterContainer {
    text-align: center;
    display: grid;
    justify-content: center;
  }

  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .shipping {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 1rem;
    input {
      margin-left: 8px;
      margin-top: 2px;
    }
  }

  .category-container {
    text-align: center;
    .category {
      display: grid;
      justify-content: center;
    }
  }

  .searchInput {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    &::placeholder {
      text-transform: capitalize;
    }
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }

  .colors {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .colorBtn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .allBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .allBtn .active {
    text-decoration: underline;
  }

  .active {
    opacity: 1;
    border-color: var(--clr-grey-5);
  }

  .price {
    margin-bottom: 0.25rem;
  }

  .clearBtn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  /* @media screen and (min-width: ;){
  
  } */

  @media (min-width: 768px) {
    .colors {
      justify-content: initial;
    }
    .filterContainer {
      text-align: initial;
      justify-content: initial;
      position: sticky;
      top: 1rem;
    }

    .category-container {
      text-align: initial;
      .category {
        display: block;
      }
    }
  }
`;
