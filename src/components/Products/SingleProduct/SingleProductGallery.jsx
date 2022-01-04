import React, { useState } from 'react';
import styled from 'styled-components';

export default function SingleProductGallery({ images = [{ url: '' }] }) {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="mainImage" className="main" />
      <div className="gallery">
        {images.map((image, index) => (
          <input
            type="image"
            src={image.url}
            alt={image.filename}
            key={index.id}
            onClick={() => setMain(images[index])}
            onKeyDown={() => setMain(images[index])}
            className={`${image.url === main.url ? 'active' : null}`}
          />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .main {
    height: 600px;
  }

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    input {
      height: 100px;
      cursor: pointer;
    }
    .active {
      border: 2px solid var(--clr-primary-5);
    }
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      input {
        height: 50px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      input {
        height: 75px;
      }
    }
  }
`;
