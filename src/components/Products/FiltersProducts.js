import React from "react";
import { Wrapper } from "./FiltersProductsStyled";
import { FaCheck, FaZhihu } from "react-icons/fa";
import { useFilterProductContext } from "../../hooks/context/filterProduct_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";

function Filters() {
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

  const categories = getUniqueValues(allProduct, "category");
  const companies = getUniqueValues(allProduct, "company");
  const colors = getUniqueValues(allProduct, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/** search input -------------------*/}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="searchInput"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/** End search input -------------------*/}

          {/* categories -------------------*/}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          {/* End categories -------------------*/}

          {/* companies -------------------*/}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company">
              {companies.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          {/* End companies -------------------*/}

          {/* colors -------------------*/}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "allBtn active" : "allBtn"
                      }`}>
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    style={{ background: c }}
                    className={`${
                      color === c ? "colorBtn active" : "colorBtn"
                    }`}
                    data-color={c}
                    onClick={updateFilters}>
                    {color === c ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End colors -------------------*/}

          {/* price range-------------------*/}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
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
          <div className="form-control shipping">
            <label htmlFor="shipping" name="shipping" id="shipping">
              free shipping
            </label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End FreeShipping-------------------*/}
        </form>
        <button type="button" className="clearBtn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
}

export default Filters;
