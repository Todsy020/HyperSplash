import { useEffect } from "react"
import { PopularItem } from "../components/MainPage/PopularItem"
import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
import { motion } from "motion/react"
import { Link, useLocation } from "react-router"
import { useContext } from "react"
import { FlavorsContext } from "../util/FlavorsContext"

export const Shop = () => {
    const location = useLocation();
    const { flavors } = useContext(FlavorsContext)
    useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    }, [location]);
    
    return (
        <div className="flex flex-col justify-center items-center overflow-hidden">
            <NavBar/>
            <div className="h-screen w-full">  
            <Link to="/shop#shopCans"><img className="mt-40" src="/images/bg-shop.png" alt="shop background" /></Link>
            <div id="shopCans" className="flex justify-center items-center h-1/6 gap-40 mt-20">
            <motion.img whileHover={{ scale: 1.1 }} drag  dragConstraints={{ top: 0, bottom: 0 }}  className="h-full cursor-grab active:cursor-grabbing" src="/images/icon-caffeine-free-png.png" alt="" />
            <motion.img whileHover={{ scale: 1.1 }} drag  dragConstraints={{ top: 0, bottom: 0 }}  className="h-full cursor-grab active:cursor-grabbing" src="/images/icon-antioxydants-png.png" alt="" />
            <motion.img whileHover={{ scale: 1.1 }} drag  dragConstraints={{ top: 0, bottom: 0 }}  className="h-full cursor-grab active:cursor-grabbing" src="/images/icon-vitamins-png.png" alt="" />
            </div>
            </div>
            <div className="flex mb-20">
                {flavors.map(({ name, img1 }) => <PopularItem key={name} name={name} img1={img1} />)}
            </div>
            <Footer/>
            </div>  
          
    )
}