import React, { useState } from 'react';
import IconSwitch from '../IconSwitch';
import CardsView from '../CardsView';
import ListView from '../ListView';

function Store({ products }) {
  const [icon, setIcon] = useState('view_list');

  function handleSwitch() {
     if(icon === 'view_list') {
        return setIcon('view_module')
      } else if (icon === 'view_module') {
        return setIcon('view_list')
      }
  }

  return (
    <div className='container'>
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      <main className='main'>
        {icon === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} /> }
      </main>
    </div>
  );
}

export default Store;