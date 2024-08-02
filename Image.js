import React from 'react';
import product from './product';

function Image() {
  return (
    <div>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
}

export default Image;
