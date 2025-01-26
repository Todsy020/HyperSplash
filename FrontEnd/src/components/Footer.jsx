import { useContext } from "react"
import { FlavorsContext } from "../util/FlavorsContext"
import { Link } from "react-router"


const submitButton = () => {
    alert('This is a prototype site for now, but thank you for your commitment :)')
}
export const Footer = () => {
    const { flavors } = useContext(FlavorsContext)
    return (
        <div className="h-full bg-[#C8F6FF] flex justify-center items-center flex-col w-full">
            <div className="w-11/12 h-1/2 border border-black rounded-3xl mt-12 flex p-7 bg-[#E5F9F9]">
            <div className="flex flex-col w-2/4">
                <span className="text-6xl font-extrabold mb-5 font-FuturaBlackBold">STAY SPLASHY</span>
                <span className="mb-3">Join our email list for promotions, giveaways, and other communications from the <span className="font-FuturaBlackBold">WIZARDS</span>.</span>
                <label className="font-FuturaBlackBold mb-4" htmlFor="email">ENTER YOUR EMAIL</label>

                <div className="border-black border-2 rounded-2xl h-16 w-4/5 flex">
                <input className="w-2/3 px-3 rounded-l-2xl outline-none" type="email" id="email" placeholder="Enter your email" required />
                <button onClick={submitButton} className="relative w-1/3 bg-[#FFBA01] rounded-xl border-black border font-FuturaBlackBold" type="submit">SUBMIT</button>
                </div>

            </div>
            <div className="flex w-3/4 justify-evenly text-lg">
                <ul>
                    <span className="font-FuturaBlackBold">SHOP</span>
                    <li className="mt-3"><Link to="/shop">VIEW ALL</Link></li>
                    {flavors.map(({name, _id}) => <li key={_id}><Link to={"/flavors/" + name}>{name}</Link></li>)}
                </ul>
                <ul>
                    <span className="font-FuturaBlackBold">FAQ</span>
                    <li className="mt-3"><Link to="/faq">FAQ</Link></li>
                </ul>
                <ul>
                    <span className="font-FuturaBlackBold">CONTACT</span>
                    <li className="mt-3"><Link to="/community">COMMUNITY</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                </ul>
            </div>
            </div>
            <div className="w-full flex justify-between items-center">
            <div className="flex gap-8 px-20">
                <Link to="https://www.instagram.com/wereallyhateovb/" target="_blank"><img className="w-12 h-12" src="/images/instagram.png" alt="instagram-logo" /></Link>
                <Link to="https://www.tiktok.com/@wereallyloveovb?_t=ZN-8tGHG7trp3e&_r=1" target="_blank"><img className="w-12 h-12" src="/images/tiktok.png" alt="tiktok-logo" /></Link>
            </div>

            <div className="flex flex-col items-center gap-3 mt-5 mr-5 mb-5">
                <Link to="https://www.instagram.com/wereallyhateovb/" target="_blank"><img className="w-20" src="/images/logo-ovb.png" alt="logo-ovb" /></Link>
                <p className="font-FuturaBlackBold">© HYPER SPLASH 2025</p>
            </div>
            </div>
        </div>
    )
}