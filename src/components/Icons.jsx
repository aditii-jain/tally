import TallyIcon from '../assets/tally.svg?react'
import PlusIcon from '../assets/plus.svg?react'
import MinusIcon from '../assets/minus.svg?react'
import MaterialsActiveIcon from '../assets/materials-active.svg?react'
import MaterialsInactiveIcon from '../assets/materials-inactive.svg?react'
import OrdersActiveIcon from '../assets/orders-active.svg?react'
import OrdersInactiveIcon from '../assets/orders-inactive.svg?react'
import ProductsActiveIcon from '../assets/products-active.svg?react'
import ProductsInactiveIcon from '../assets/products-inactive.svg?react'
import IntegrationsActiveIcon from '../assets/integrations-active.svg?react'
import IntegrationsInactiveIcon from '../assets/integrations-inactive.svg?react'
import LogoutSvg from '../assets/logout.svg?react'
import SearchIcon from '../assets/search.svg?react'
import AvatarIcon from '../assets/avatar.svg?react'
import SortLinesIcon from '../assets/sort-lines.svg?react'
import SortArrowsIcon from '../assets/sort-arrows.svg?react'
import TShirtRedIcon from '../assets/red.svg?react'
import TShirtBlackIcon from '../assets/black.svg?react'
import TShirtWhiteIcon from '../assets/white.svg?react'

export function Avatar() {
    return <AvatarIcon width={36} height={36} />;
}


export function TallyLogo() {
    return <TallyIcon width={28} height={25} />;
}

export function PlusButton() {
  return <PlusIcon width={18} height={18} />;
}

export function MinusButton() {
  return <MinusIcon width={18} height={18} />;
}

export function MaterialsIcon({ isActive }) {
  return isActive ? (
    <MaterialsActiveIcon width={24} height={24} />
  ) : (
    <MaterialsInactiveIcon width={24} height={24} />
  );
}

export function OrdersIcon({ isActive }) {
  return isActive ? (
    <OrdersActiveIcon width={24} height={24} />
  ) : (
    <OrdersInactiveIcon width={24} height={24} />
  );
}

export function ProductsIcon({ isActive }) {
  return isActive ? (
    <ProductsActiveIcon width={24} height={24} />
  ) : (
    <ProductsInactiveIcon width={24} height={24} />
  );
}

export function IntegrationsIcon({ isActive }) {
  return isActive ? (
    <IntegrationsActiveIcon width={24} height={24} />
  ) : (
    <IntegrationsInactiveIcon width={24} height={24} />
  );
}

export function LogoutIcon() {
  return <LogoutSvg width={36} height={36} />;
}

export function SearchIconComponent() {
  return <SearchIcon width={16} height={16} />;
}

export function SortLines() {
  return <SortLinesIcon width={24} height={24} />;
}

export function SortArrows() {
  return <SortArrowsIcon width={24} height={24} />;
}

export function TShirt({ color }) {

  const getIcon = () => {
    switch (color) {
      case '#E53935':
        return <TShirtRedIcon width={34} height={34} />;
      case '#000000':
        return <TShirtBlackIcon width={34} height={34} />;
      case '#FFFFFF':
        return <TShirtWhiteIcon width={34} height={34} />;
      default:
        return <TShirtBlackIcon width={34} height={34} />;
    }
  };

  return (
    <div>
      {getIcon()}
    </div>
  );
} 