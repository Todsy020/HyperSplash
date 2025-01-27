import { NavBar } from "../components/NavBar"
import { Footer } from "../components/Footer"
export const Community = () => {
  return (
      <div className="overflow-hidden">
          <NavBar />
          <div className="h-screen w-screen flex items-center justify-center flex-col font-ObviouslyNarrowBold text-5xl">
        <h2>❤️our beloved and dedicated community is so talented, take a look at some of their fanarts❤️</h2>
      </div>
                            <img className="m-auto w-1/3 mb-6" src="/images/fanart/bg-vigile-png.png" alt="" />
      <div className="flex flex-wrap">

              <img className="w-1/2" src="/images/fanart/bg-car-png.png" alt="" />
              <img className="w-1/2" src="/images/fanart/bg-labo-png.png" alt="" />
              <img className="w-1/2" src="/images/fanart/bg-nightclub-png.png" alt="" />
              <img className="w-1/2" src="/images/fanart/bg-pool-png.png" alt="" />
              <img className="w-full" src="/images/fanart/bg-sky-png.png" alt="" />
          </div>
          <Footer/>
    </div>
  )
}
