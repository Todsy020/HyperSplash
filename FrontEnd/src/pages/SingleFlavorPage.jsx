import { useParams } from "react-router"
import { NavBar } from "../components/NavBar";
import { SingleFlavorPart } from "../components/FlavorsPage/SingleFlavorPart"
import { FlavorNotFound } from "../components/FlavorsPage/FlavorNotFound";
import { useContext } from "react";
import { FlavorsContext } from "../util/FlavorsContext";
import { Footer } from "../components/Footer";

export const SingleFlavorPage = () => {
    const { flavors } = useContext(FlavorsContext)
    const { id } = useParams();
    const flavor = flavors.find(flavor => flavor.name === id);
    if (!flavor) {
        return <FlavorNotFound/>;
    }
    return (
        <>
           <NavBar/>
            <SingleFlavorPart id={flavor._id} name={flavor.name} subtitle={flavor.subtitle} description={flavor.description} img1={flavor.img1} img2={flavor.img2} price={flavor.price} />
            <Footer/>
        </>
    );
};