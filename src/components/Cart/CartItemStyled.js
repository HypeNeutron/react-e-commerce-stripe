import styled from 'styled-components';

export default styled.article`
  display: grid;
  grid-template: 75px/200px auto auto;
  gap: 3em 1em;
  justify-items: center;
  margin-bottom: 3em;
  align-items: center;

  .item {
    display: grid;
    grid-template-rows: 75px;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;

    &__img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .itemName {
      font-size: 0.75rem;
      margin-bottom: 0;
    }

    .itemColor {
      color: var(--clr-grey-5);
      font-size: 0.75rem;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      span {
        display: inline-block;
        background: red;
        margin-top: 0.15rem;
        margin-left: 0.25rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: var(--radius);
      }
    }

    .itemPrice {
      color: var(--clr-primary-5);
    }
  }

  .amountBtn {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  .subtotal {
    display: none;
  }

  .price {
    display: none;
  }

  .removeBtn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;

    .item {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;

      img {
        height: 100%;
      }

      .itemColor {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        span {
          margin-top: 0.31rem;
          width: 0.75rem;
          height: 0.75rem;
        }
      }

      .itemName {
        font-size: 0.85rem;
      }
    }

    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }

    .amountBtn {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }

    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }

    .itemPrice {
      display: none;
    }
  }
`;
