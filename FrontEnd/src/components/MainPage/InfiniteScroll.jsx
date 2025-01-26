import { InfiniteScrollComp } from "./InfiniteScrollComp";
import { flavorsImg } from "../../data/flavorsImg";
export const InfiniteScroll = () => {

  return (
      <div className="container mx-auto py-10">
      <InfiniteScrollComp images={flavorsImg} from={"-100%"} to={'0'} />
    </div>
  );
};
