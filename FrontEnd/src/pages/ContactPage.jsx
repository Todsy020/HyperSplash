import { NavBar } from "../components/NavBar"
import { Link } from "react-router"
import { Footer } from "../components/Footer"
export const ContactPage = () => {
  return (
    <>
      <NavBar />
      <div className="h-screen relative flex items-center justify-center bg-[#3302FF] text-center">
        {/* L'image de fond */}
        <img
          className="absolute z-0 w-[650px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/images/contact.png"
          alt=""
        />
        {/* Le texte centré */}
        <h2 className="absolute text-4xl font-bold leading-[80px] z-10 text-white">
          CONTACT<br />
          <span>US </span><br />
          <Link
            to="https://www.instagram.com/wereallyhateovb/"
            target="_blank"
            className="glowing"
          >
            <span>HERE</span>
          </Link>
        </h2>
      </div>
      <Footer />
    </>
  );
};
