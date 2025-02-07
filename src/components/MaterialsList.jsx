import { useState } from 'react'
import MaterialItem from './MaterialItem'
import { SortLines, SortArrows, SearchIconComponent } from './Icons'

function MaterialsList() {
  const [materials, setMaterials] = useState([
    { 
      id: 1, 
      name: 'Gildan T-Shirt - Red / M', 
      color: '#E53935',
      quantity: 13
    },
    { 
      id: 2, 
      name: 'Gildan T-Shirt - Red / L', 
      color: '#E53935',
      quantity: 46
    },
    { 
      id: 3, 
      name: 'Gildan T-Shirt - Black / S', 
      color: '#212121',
      quantity: 21
    },
    { 
      id: 4, 
      name: 'Gildan T-Shirt - Black / M', 
      color: '#212121',
      quantity: 34
    },
    { 
      id: 5, 
      name: 'Gildan T-Shirt - Black / L', 
      color: '#212121',
      quantity: 27
    },
    { 
      id: 6, 
      name: 'Gildan T-Shirt - White / S', 
      color: '#FFFFFF',
      quantity: 34
    },
    { 
      id: 7, 
      name: 'Gildan T-Shirt - White / M', 
      color: '#FFFFFF',
      quantity: 51
    },
    { 
      id: 8, 
      name: 'Gildan T-Shirt - White / L', 
      color: '#FFFFFF',
      quantity: 29
    }
  ])

  const BOX_SIZE = 24; // Define constant box size

  const updateInventory = (id, newQuantity) => {
    console.log('Updating inventory:', id, newQuantity);
    setMaterials(prevMaterials => prevMaterials.map(material => 
      material.id === id 
        ? { ...material, quantity: newQuantity }
        : material
    ));
  }

  return (
    <div className="materials-list">
      {/* Search and Controls Row */}
      <div className="list-controls">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Materials"
            className="search-input"
          />
          <div className="filter-sort-buttons">
            <button className="icon-button">
              <SortLines />
            </button>
            <button className="icon-button">
              <SortArrows />
            </button>
          </div>
        </div>
        <button className="add-new-button">
          <span className="plus-icon">+</span>
          Add New
        </button>
      </div>

      {/* Materials List */}
      {materials.map(material => (
        <MaterialItem 
          key={material.id} 
          {...material} 
          boxSize={BOX_SIZE}
          onUpdateInventory={updateInventory}
        />
      ))}
    </div>
  )
}

export default MaterialsList 