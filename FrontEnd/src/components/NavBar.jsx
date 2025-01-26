import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FlavorsContext } from '../util/FlavorsContext';
import { CartButton } from './NavBar/CartButton';
import { CartSlide } from './NavBar/CartSlide';
import { CartContext } from '../util/CartContext';

export const NavBar = () => {
  const {cart} = useContext(CartContext)
  const { flavors } = useContext(FlavorsContext)
const [isVisible, setIsVisible] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
}, [lastScrollY]);
  
const FlyoutLink = ({ children, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
        />
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  
};

const PricingContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-2xl font-ObviouslyNarrowBold text-2xl">
      <div className="mb-3 space-y-3">
        {flavors.map(({ _id, name }) => <div className='hover:underline' key={_id}><Link to={"/flavors/" + name}>{name}</Link></div>)}
      </div>
      <Link to='/shop'>
      <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 transition-colors liquid hover:text-white">
        ALL FLAVORS
        </button>
        </Link>
    </div>
  );
  };
  const JustUnderline = () => {
  return (
    <></>
  );
};
  FlyoutLink.propTypes = {
    children: PropTypes.object,
    FlyoutContent: PropTypes.func,
  };

  return (
    <nav id='navbar' className={`fixed top-0 left-0 w-screen text-white bg-black/15 text-xl flex items-center justify-around font-FuturaBlackBold z-50 ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <ul className='flex gap-5'>
          <NavLink to='/'><FlyoutLink FlyoutContent={JustUnderline}><li>HOME</li></FlyoutLink></NavLink>
          <FlyoutLink FlyoutContent={PricingContent}><NavLink to='/shop'><li>SHOP</li></NavLink></FlyoutLink>
          <NavLink to='/community'><FlyoutLink FlyoutContent={JustUnderline}><li>COMMUNITY</li></FlyoutLink></NavLink>
        </ul>
      <NavLink to='/'><img id='logo' className='w-40 py-2' src="/images/logo.png" alt="logo-Hypersplash" /></NavLink>
        <ul className='flex items-center gap-5'>
          <NavLink to='/contact'><FlyoutLink FlyoutContent={JustUnderline}><li>CONTACT</li></FlyoutLink></NavLink>
        <NavLink to='/faq'><FlyoutLink FlyoutContent={JustUnderline}><li>FAQ</li></FlyoutLink></NavLink>
        
        <li><CartButton 
        onClick={toggleCart} 
        isOpen={isCartOpen}
        itemCount={cart.reduce((total, item) => total + item.quantity, 0)} 
        /></li>
        <CartSlide 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
        </ul>
      </nav>
    
  )
}


