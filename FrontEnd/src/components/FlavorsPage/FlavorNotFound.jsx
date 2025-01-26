import { NavBar } from "../NavBar"


export const FlavorNotFound = () => {
    return (
            <div className="h-screen w-screen flex items-center justify-center font-ObviouslyNarrowBold text-5xl text-center">
            <NavBar />
              <h2>Flavor not found.<p className="p-5">😢</p>Please try searching for another flavor!</h2>
        </div>
    )
}