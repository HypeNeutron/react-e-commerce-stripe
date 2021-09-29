import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterProductContext } from '../../hooks/context/filterProduct_context';

const SortProducts = () => {
  const {
    filtered_products: products,
    grid_view: gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterProductContext();

  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className={`${gridView ? 'active' : null}`} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button type="button" className={`${!gridView ? 'active' : null}`} onClick={setListView}>
          <BsList />
        </button>
      </div>
      <p>{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className="sort-input" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (A-Z)</option>
          <option value="name-z">name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  row-gap: 0.75rem;
  column-gap: 2rem;
  margin-bottom: 2rem;

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    width: 50px;

    button {
      cursor: pointer;
      display: flex;
      width: 1.5rem;
      height: 1.5rem;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      border-radius: var(--radius);
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  form {
    label {
      display: inline-block;
      font-size: 1rem;
      text-transform: capitalize;
      margin-right: 0.5rem;
    }
    select.sort-input {
      border-color: transparent;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
    }
  }

  @media (min-width: 575px) {
    grid-template-columns: auto auto 1fr auto;
    row-gap: 0;
    .btn-container {
      width: auto;
    }
    form {
      label {
        display: inline;
        font-size: 1rem;
        text-transform: capitalize;
        margin-right: 0;
      }
    }
  }
`;

export default SortProducts;
