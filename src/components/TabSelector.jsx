import { useState } from 'react';

function TabSelector({ activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'inventory' ? 'active' : ''}`}
        onClick={() => onTabChange('inventory')}
      >
        Inventory
      </button>
      <button 
        className={`tab ${activeTab === 'orderQueue' ? 'active' : ''}`}
        onClick={() => onTabChange('orderQueue')}
      >
        Order Queue
      </button>
    </div>
  );
}

export default TabSelector; 