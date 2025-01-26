import { InfiniteScroll } from "./InfiniteScroll"
import { motion } from "motion/react"
export const ThirdPart = () => {
    return (
        <div className="flex flex-col items-center z-0">
            <motion.div className="p-40 w-3/4 text-center z-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeOut" }}
            >
                <motion.p className=" text-4xl shadow-xl rounded-full font-bold font-FuturaBlackBold p-3 cursor-pointer"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 300 } }}
                >
                    GREAT SOURCE OF VITAMINS, WITHOUT CAFEINE,
                    ANTIOXYDANTS, ZERO SUGAR, <br /> <span className="font-SuperFestival text-pink-600 glowing">LOVELY</span> AND <span className="font-SuperFestival text-green-600 glowing">VEGAN</span></motion.p>
                <InfiniteScroll/>
            </motion.div>
            </div>
            
    )
}