// components/MenuItem.tsx
import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  href: string;
  icon: React.ReactNode; // Can be any React element (like an icon component)
  children: React.ReactNode; // The text content of the menu item
  onClick?: () => void; // Optional click handler
}

const MenuItem: React.FC<MenuItemProps> = ({ href, icon, children, onClick }) => {
  return (
    <Link href={href}>
      <a
        onClick={onClick} // Pass onClick to the anchor tag
        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
      >
        {icon}
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default MenuItem;