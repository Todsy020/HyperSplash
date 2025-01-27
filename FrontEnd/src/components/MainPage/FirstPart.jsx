import { Link } from "react-router"
export const FirstPart = () => {
  return (
    <div className="h-screen bg-[url('/images/bg-principal.png')] bg-cover" >
      <Link to='/shop'><button className="bg-white absolute bottom-0 left-0 m-10 p-3 px-10 border-black border-2 font-FuturaBlackBold liquid">SHOP NOW</button></Link>
        </div>
  )
}
