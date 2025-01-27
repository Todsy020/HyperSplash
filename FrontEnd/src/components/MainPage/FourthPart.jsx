import { Reviews } from "./Reviews"
import { InfiniteScroll2 } from "./InfiniteScroll2"
import PropTypes from 'prop-types';


export const FourthPart = ({reviews, flavorsImages}) => {
  return (
    <div className=" flex flex-col justify-center">
      <p className="text-4xl text-center font-FuturiBlackRegular">
        They tried it and they <span className="font-SuperFestival text-pink-600 glowing">LOVED</span> it, why shouldn&apos;t you?</p>
      <div className="flex justify-center">
        <Reviews reviews={reviews} />
        </div>
      <InfiniteScroll2 flavorsImages={flavorsImages} />
    </div>
  )
}

  FourthPart.propTypes = {
    reviews: PropTypes.array,
    flavorsImages: PropTypes.array
  };