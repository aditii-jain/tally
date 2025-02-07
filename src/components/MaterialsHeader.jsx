import { useState } from 'react';
import TabSelector from './TabSelector';
import { SearchIconComponent, SortLines, SortArrows, PlusButton } from './Icons';

function MaterialsHeader() {
  const [activeTab, setActiveTab] = useState('inventory');

  return (
    <div>
      {/* Header Section */}
      <div className="header-container">
        <div className="top-header">
          <h1 className="breadcrumb">Materials <span style={{ color: '#AAAAAA' }}>/ Blanks</span></h1>
        </div>  
        <div className="tab-selector-container">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

export default MaterialsHeader; 