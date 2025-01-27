import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const ReviewsComp = ({ img, span, comment, stars }) => {
  return (
      <motion.div className="flex-shrink-0 w-1/4 p-4"
          whileHover={{ scale: 1.05 }}
      >
      <div className="flex flex-col items-center justify-center h-96 p-10 bg-blue-300 shadow-xl shadow-blue-400 border rounded-2xl cursor-grab active:cursor-grabbing">
        <img className="w-24 h-24" src={img} alt="profiles pictures" draggable="false"/>
              <span className="text-center mt-8 mb-2 text-lg font-extrabold">{span}</span>
              <span className="mb-8 text-2xl">{stars}</span>
        <p className="text-center font-bold">{comment}</p>
      </div>
    </motion.div>
  );
};

ReviewsComp.propTypes = {
  img: PropTypes.string,
  span: PropTypes.string,
    comment: PropTypes.string,
  stars: PropTypes.string,
};
