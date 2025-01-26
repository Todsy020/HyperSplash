import { Reviews } from "./Reviews"
import { InfiniteScroll2 } from "./InfiniteScroll2"
import PropTypes from 'prop-types';


export const FourthPart = ({reviews, flavorsImages}) => {
  return (
    <div className=" flex flex-col justify-center">
      <p className="text-4xl text-center font-FuturiBlackRegular">
        They tasted it and <span className="font-SuperFestival text-pink-600 glowing">LOVED</span> it , so why shouldn&apos;t you?</p>
      <Reviews reviews={reviews} />
      <InfiniteScroll2 flavorsImages={flavorsImages} />
    </div>
  )
}

  FourthPart.propTypes = {
    reviews: PropTypes.array,
    flavorsImages: PropTypes.array
  };