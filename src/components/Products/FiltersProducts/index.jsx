import React from 'react';
import { FaCheck } from 'react-icons/fa';
import FilterSection from './FiltersProductsStyled';
import { useFilterProductContext } from '../../../context/filterProduct_context';
import { getUniqueValues, formatPrice } from '../../../utils/helpers';

export default function Filters() {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price: minPrice,
      max_price: maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products: allProduct,
  } = useFilterProductContext();

  const categories = getUniqueValues(allProduct, 'category');
  const companies = getUniqueValues(allProduct, 'company');
  const colors = getUniqueValues(allProduct, 'colors');

  return (
    <FilterSection>
      <div className="filters">
        <form onSubmit={(e) => e.preventDefault()}>
          {/** search input -------------------*/}
          <div className="filters__form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="filters__searchInput"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/** End search input -------------------*/}

          {/* categories -------------------*/}
          <div className="filters__form-control filters__form-control--category">
            <h5>category</h5>
            <div className="category-center">
              {categories.map((unique) => (
                <button
                  key={unique.id}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === unique.toLowerCase()
                      ? 'categoryBtn__active'
                      : null
                  }`}
                >
                  {unique}
                </button>
              ))}
            </div>
          </div>
          {/* End categories -------------------*/}

          {/* companies -------------------*/}
          <div className="filters__form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="filters__select-company"
            >
              {companies.map((unique) => (
                <option key={unique.id} value={unique}>
                  {unique}
                </option>
              ))}
            </select>
          </div>
          {/* End companies -------------------*/}

          {/* colors -------------------*/}
          <div className="filters__form-control">
            <h5>colors</h5>
            <div className="filters__colors-center">
              {colors.map((c) => {
                if (c === 'all') {
                  return (
                    <button
                      key={c.id}
                      name="color"
                      onClick={updateFilters}
                      type="button"
                      data-color="all"
                      className={`${
                        color === 'all'
                          ? 'allColorBtn allColorBtn--active'
                          : 'allColorBtn'
                      }`}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={c.id}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? 'colorsBtn colorsBtn--active' : 'colorsBtn'
                    }`}
                    type="button"
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End colors -------------------*/}

          {/* price range-------------------*/}
          <div className="filters__form-control">
            <h5>price</h5>
            <p className="filters__priceRange-format">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              onChange={updateFilters}
              value={price}
            />
          </div>
          {/* End price range-------------------*/}

          {/* FreeShipping-------------------*/}
          <div className="filters__form-control filters__form-control--shipping">
            <label htmlFor="shipping" name="shipping" id="shipping">
              free shipping
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={updateFilters}
                checked={shipping}
              />
            </label>
          </div>
          {/* End FreeShipping-------------------*/}
        </form>

        <button
          type="button"
          className="clearAllFilterBtn"
          onClick={clearFilters}
        >
          clear filters
        </button>
      </div>
    </FilterSection>
  );
}
