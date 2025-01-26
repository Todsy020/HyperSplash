import { PopularItem } from "./PopularItem";
import { useContext } from "react";
import { FlavorsContext } from "../../util/FlavorsContext";
import PropTypes from 'prop-types';


export const PopularList = () => {
  const { flavors } = useContext(FlavorsContext); // Accéder directement au tableau des flavors
  return (
    <div className="flex justify-evenly items-center h-64 mt-28">
      {flavors.filter(flavor => flavor.popular).map(({ _id, name, img1 }) => (
        <PopularItem key={_id} name={name} img1={img1} />
      ))}
    </div>
  );
};

PopularList.propTypes = {
  flavors: PropTypes.array
};
