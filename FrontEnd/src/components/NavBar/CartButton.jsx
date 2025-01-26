import { ShoppingCart } from 'lucide-react';
import PropTypes from 'prop-types';

export const CartButton = ({ onClick, isOpen, itemCount = 0 }) => {

  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors ${
        isOpen ? 'z-50' : 'z-10'
      } relative`}
      aria-label="Toggle cart"
    >
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

CartButton.propTypes = {
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  itemCount: PropTypes.number
  };