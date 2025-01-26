import { NavBar } from "../components/NavBar"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Footer } from "../components/Footer"
export const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)
  const [faq, setFaq] = useState([])

  useEffect (() => {
      fetch('http://localhost:5000/api/faq')
      .then((response) => response.json())
      .then((data) => setFaq(data))
      .catch((err) => console.log(err))
  }, []);
  
  return (
      <div className="overflow-hidden">
      <NavBar />
      <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
        <div className="w-[89%] m-auto max-w-[1400px] bg-blue-300 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl mb-6 font-semibold text-center font-FuturiBlackRegular">Frequently asked questions</h2>
          {faq.map((question) => (
            <div key={question._id} className="mb-4 last:mb-0">
              <button className="w-full text-left text-2xl focus:outline-none p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center font-FuturiBlackRegular" onClick={() => setActiveQuestion(activeQuestion == question._id ? null : question._id)}>
                {question.question}
              </button>
              <AnimatePresence>
                {activeQuestion === question._id && (<motion.div
                  initial={{
                    opacity: 0, height: 0,
                  }}
                  animate={{
                    opacity: 1, height: 'auto',
                  }}
                  exit={{
                    opacity: 0, height: 0,
                  }}
                  className="mt-2 ml-4"
                >
                  <p className="text-xl">{question.answer}</p>
                </motion.div>)}
              </AnimatePresence>
            </div>))}
    </div>
      </div>
<Footer/>
      </div>
  )
}

