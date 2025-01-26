import PropTypes from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../util/CartContext';

export const SingleFlavorPart = ({ name, subtitle, description, img1, img2, price, id }) => {
    const { addToCart } = useContext(CartContext)
    const [imgHover, setImgHover] = useState(img1);
     useEffect(() => {
        setImgHover(img1);
    }, [img1]);
    const changeImgHover = () => {
        setImgHover(img2)
    }
    const resetImgHover = () => {
        setImgHover(img1)
    }
    return (
        <div className="h-screen flex items-center justify-center pt-20">

        <div className="flex w-2/3">

            <div className="w-1/2 h-full flex items-center justify-center">
                <img 
                onMouseEnter={changeImgHover}
                onMouseLeave={resetImgHover}
                className="" src={imgHover} alt="Can" />
            </div>

            <div className='flex flex-col justify-center w-1/3'>
                <h1 className='text-2xl font-FuturaBlackBold'>{name}</h1>
                <span className='text-xl font-extralight italic pt-8'>{subtitle}</span>
                <p className='py-5 font-FuturiBlackRegular'>{description}</p>
                <span className='text-2xl font-FuturaBlackBold'>${price}</span><br/>
                    <button
                    className="bg-black border text-white p-4 mt-7 font-FuturaBlackBold hover:border transition ease-in-out liquid"
                    onClick={() => addToCart({ id, name, price, img1 })}
                    >
                    ADD TO FRIDGE
                    </button>
                <div className='flex justify-center items-center mt-7 h-24 gap-8'>
                <img className="h-full" src="/images/icon-antioxydants-png.png" alt="" />
                <img className="h-full" src="/images/icon-caffeine-free-png.png" alt="" />
                        <img className="h-full" src="/images/icon-vitamins-png.png" alt="" />
                        
                    </div>
                    
            </div>
        </div>
        </div>
    )
}

SingleFlavorPart.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    price: PropTypes.number,
  };