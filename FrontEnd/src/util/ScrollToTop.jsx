import { useLocation } from 'react-router';
import { useEffect } from 'react';


export const ScrollToTop = () => {
  const location = useLocation(); // Permet d'écouter les changements de route

  useEffect(() => {
    window.scrollTo(0, 0); // Remet la page en haut
  }, [location]); // Déclenche l'effet à chaque changement de route

  return null; // Ce composant ne rend rien
};
