import { ReviewsComp } from "./ReviewsComp";
import { motion, useMotionValue} from "framer-motion";
import PropTypes from 'prop-types';

export const Reviews = ({reviews}) => {
  const x = useMotionValue(0); // Position de drag

  return (
    <motion.div 
      className="flex w-4/5 mx-auto mb-20 mt-5"
    >
      <motion.div 
        className="flex"
        style={{ x }} // Applique la valeur de translation
        drag="x" // Active le drag horizontal
        dragConstraints={{ left: -1000, right: 0 }} // Ajuste en fonction du nombre d'avis
        >
        {reviews.map(({ _id, img, span, comment, stars }) => (
          <ReviewsComp key={_id} img={img} span={span} comment={comment} stars={stars} />
        ))}
      </motion.div>
    </motion.div>
    
  );
  
};

 Reviews.propTypes = {
    reviews: PropTypes.array
  };

