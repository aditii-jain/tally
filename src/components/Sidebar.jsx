import { useState } from 'react';
import { TallyLogo, MaterialsIcon, OrdersIcon, ProductsIcon, IntegrationsIcon, LogoutIcon, Avatar } from './Icons';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState('materials');

  const navItems = [
    { id: 'logo', label: 'Tally', icon: TallyLogo },
    { id: 'materials', label: 'Materials', icon: MaterialsIcon },
    { id: 'products', label: 'Products', icon: ProductsIcon },
    { id: 'fulfillment', label: 'Fulfillment', icon: OrdersIcon },
    { id: 'integrations', label: 'Integrations', icon: IntegrationsIcon },
  ];

  const handleNavClick = (id) => {
    if (id === 'logo') {
      setIsExpanded(!isExpanded);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            data-id={item.id}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
          >
            <span className="icon">
              {typeof item.icon === 'function' ? (
                item.icon({ isActive: activeItem === item.id })
              ) : (
                item.icon
              )}
            </span>
            <span className={`label ${item.label === 'Tally' ? 'tally-text' : ''}`}>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout">
          <span className="icon">
            <LogoutIcon />
          </span>
          <span>Logout</span>
        </button>
        
        <div className="user-profile">
          <div className="avatar-container">
            <Avatar />
          </div>
          <div className="user-info">
            <div className="user-name">Don't Ruin It</div>
            <div className="user-role">Pro Crafter</div>
          </div>
          {isExpanded && <span className="menu">...</span>}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar; 