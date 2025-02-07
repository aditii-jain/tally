import { PlusButton, MinusButton, TShirt } from './Icons'

function MaterialItem({ id, name, color, quantity, boxSize, onUpdateInventory }) {
  const isLowStock = quantity < boxSize;

  const handleDecrease = () => {
    // console.log('Decreasing:', id, quantity);
    onUpdateInventory(id, Math.max(0, quantity - 1));
  };

  const handleIncrease = () => {
    // console.log('Increasing:', id, quantity);
    onUpdateInventory(id, quantity + 1);
  };

  return (
    <div className="material-item">
      <div className="item-left">
        <div className="item-image">
          <TShirt color={color} />
        </div>
        <div className="item-details">
          <span className="item-name">{name}</span>
        </div>
      </div>
      <div className={`item-quantity ${isLowStock ? 'low-stock' : ''}`}>
        <button 
          className="decrease" 
          onClick={handleDecrease}
          type="button"
        >
          <MinusButton />
        </button>
        <div className="quantity-display">
          <div className="number">{quantity}</div>
          <div className="box-size">{boxSize} PCS</div>
        </div>
        <button 
          className="increase" 
          onClick={handleIncrease}
          type="button"
        >
          <PlusButton />
        </button>
      </div>
    </div>
  )
}

export default MaterialItem 