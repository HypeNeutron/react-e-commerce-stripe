import styled from 'styled-components';

export default styled.section`
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

  .clearAllFilterBtn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }

  .filters {
    display: grid;
    text-align: center;
    justify-content: center;

    @media screen and (min-width: 768px) {
      position: sticky;
      top: 1rem;
      text-align: initial;
      justify-content: initial;
    }

    &__form-control {
      margin-bottom: 1.25rem;
      h5 {
        margin-bottom: 0.5rem;
      }
    }

    &__form-control--category {
      text-align: center;
      @media screen and (min-width: 768px) {
        text-align: initial;
      }
      .category-center {
        display: grid;
        justify-content: center;
        @media screen and (min-width: 768px) {
          display: block;
        }
      }
      .categoryBtn__active {
        opacity: 1;
        border-color: var(--clr-grey-5);
      }
    }

    &__form-control--shipping {
      display: flex;
      align-items: center;
      text-transform: capitalize;
      font-size: 1rem;
      input {
        margin-left: 8px;
        margin-top: 2px;
      }
    }

    &__searchInput {
      padding: 0.5rem;
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      letter-spacing: var(--spacing);
      &::placeholder {
        text-transform: capitalize;
      }
    }

    &__select-company {
      background: var(--clr-grey-10);
      border-radius: var(--radius);
      border-color: transparent;
      padding: 0.25rem;
    }

    &__priceRange-format {
      margin-bottom: 0.25rem;
    }

    &__colors-center {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 768px) {
        justify-content: initial;
      }

      .colorsBtn {
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

      .allColorBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
      }

      .allColorBtn--active,
      .colorsBtn--active {
        opacity: 1;
        border-color: var(--clr-grey-5);
      }
    }
  }
`;
