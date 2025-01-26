import { InfiniteScrollComp } from "./InfiniteScrollComp";
import { flavorsImg } from "../../data/flavorsImg";
export const InfiniteScroll2 = () => {

  return (
      <div className="container mx-auto">
      <InfiniteScrollComp images={flavorsImg} from={'0'} to={"-100%"} />
    </div>
  );
};
