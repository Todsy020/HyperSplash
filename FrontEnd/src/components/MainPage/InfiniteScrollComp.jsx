import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const InfiniteScrollComp = ({ images, from, to }) => {

  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((images, id) => {
          return <img className="h-40 w-56 pr-20" src={images} key={id} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
              {images.map((images, id) => {
            return <img className="h-40 w-56 pr-20" src={images} alt='cans' key={id} />;
            
        })}
          </motion.div>
          
    </div>
  );
};
InfiniteScrollComp.propTypes = {
    img1: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    images: PropTypes.array,
  };
