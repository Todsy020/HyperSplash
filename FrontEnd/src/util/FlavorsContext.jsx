import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const FlavorsContext = createContext();

export const FlavorsProvider = ({ children }) => {
  const [flavors, setFlavors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/mainpage')
      .then((response) => response.json())
      .then((data) => {
        setFlavors(data.flavors);
      })
      .catch((error) => console.error('Error fetching flavors:', error));
  }, []);

  return (
    <FlavorsContext.Provider value={{ flavors, setFlavors }}>
      {children}
    </FlavorsContext.Provider>
  );
};

FlavorsProvider.propTypes = {
    children: PropTypes.node
  };
