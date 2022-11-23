import React from 'react';

function ShopItem({item}) {
  return (
    <div className='shopItem'>
      <div className='wrap-img'>
        <img src={item.img} alt='' />
      </div>
      <h2 className='head'>{item.name}</h2>
      <p>{item.color}</p>
      <span className='card-price'>${item.price}</span>
      <button className='card-button'>Add to Cart</button>
    </div>
  );
}

export default ShopItem;