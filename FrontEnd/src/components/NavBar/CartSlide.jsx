import { Minus, Plus, X, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../util/CartContext';



export const CartSlide = ({ isOpen, onClose }) => {
  // Calculate total
  const { cart, decreaseQuantity, increaseQuantity, clearCart, checkOutAlert } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Cart panel */}
      <div
        className={`fixed top-24 right-4 w-96 h-[calc(75vh)] bg-white shadow-xl transform transition-transform duration-300 ease-in-out font-ObviouslyNarrowBold ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-3 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">YOUR FRIDGE</h2>
            <div className='flex gap-4'>
              <button onClick={clearCart} className="p-1 hover:bg-gray-100 rounded-full">
              <Trash2 className='w-6 h-6 text-black hover:text-red-600' />
              </button>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6 text-black" />
              </button>
              </div>
          </div>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="p-3 border-b flex items-center gap-4">
              <img
                src={item.img1}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium text-black">{item.name}</h3>
                <p className="text-black">{item.price.toFixed(2)} €</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Minus onClick={() => decreaseQuantity(item.id)} className="w-4 h-4 text-black" />
                  </button>
                  <span className="w-8 text-center text-black">{item.quantity}</span>
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Plus onClick={() => increaseQuantity(item.id)}  className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
              <p className="font-medium text-black">
                {(item.price * item.quantity).toFixed(2)} €
              </p>
              
            </div>
          ))}
        </div>

        {/* Footer with total */}
        <div className="border-t p-3 bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold text-black">Total</span>
            <span className="text-lg font-bold text-gray-900">{total.toFixed(2)} €</span>
          </div>
          <button onClick={checkOutAlert} className="w-full bg-white text-black py-3 rounded-lg font-medium border border-black transition-colors liquid">
            CHECKOUT
          </button>

        </div>
      </div>
    </>
  );
};

CartSlide.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
