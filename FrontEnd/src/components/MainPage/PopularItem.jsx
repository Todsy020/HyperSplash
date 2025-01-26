import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export const PopularItem = ({name, img1}) => {
  return (
    <motion.div className='flex flex-col text-xl items-center justify-center'
    whileHover={{ scale: 1.1 }}>
          <Link to={"/flavors/" + name}><img className='w-96' src={img1} alt="Popular-Item" /></Link>
          <span className='font-SuperFestival text-3xl mt-7'>{name}</span>
    </motion.div>
  )
  
}

PopularItem.propTypes = {
    name: PropTypes.string,
    img1: PropTypes.string,
  };

