import { useState } from 'react';
import { PlusButton, MinusButton } from './Icons';

function UpdateInventory({ initialQuantity = 0, boxSize = 24 }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const isLowStock = quantity < boxSize;

  const handleDecrease = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  return (
    <div className={`update-inventory ${isLowStock ? 'low-stock' : ''}`}>
      <button className="decrease" onClick={handleDecrease}>
        <MinusButton />
      </button>
      <div className="quantity-display">
        <div className="number">{quantity}</div>
        <div className="box-size">{boxSize} PCS</div>
      </div>
      <button className="increase" onClick={handleIncrease}>
        <PlusButton />
      </button>
    </div>
  );
}

export default UpdateInventory; 