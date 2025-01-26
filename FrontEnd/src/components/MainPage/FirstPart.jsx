import { Link } from "react-router"
import { motion } from "motion/react"
export const FirstPart = () => {
  return (
    <motion.div className="h-screen bg-[url('/images/bg-principal.png')] bg-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
       >
      <Link to='/shop'><button className="bg-white absolute bottom-0 left-0 m-10 p-3 px-10 border-black border-2 font-FuturaBlackBold liquid">SHOP NOW</button></Link>
        </motion.div>
  )
}
