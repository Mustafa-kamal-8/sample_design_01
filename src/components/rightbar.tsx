import React from 'react';

interface RightbarProps {
  isOpen: boolean;
  toggleRightbar: () => void;
}

const Rightbar: React.FC<RightbarProps> = ({ isOpen, toggleRightbar }) => {
  return (
    <aside className={`
      fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-30
      transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 lg:static lg:shadow-none
    `}>
      <div className="p-4 border-b border-gray-300">
        <button onClick={toggleRightbar}>Close</button>
      </div>
      <nav className="p-4">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Rightbar;
