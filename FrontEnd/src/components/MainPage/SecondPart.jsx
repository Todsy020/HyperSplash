import { useEffect } from 'react';
import { PopularList } from "./PopularList";
import { motion } from 'motion/react';
import PropTypes from 'prop-types';

export const SecondPart = () => {

  useEffect(() => {
    // Fonction de changement de couleur multicolore
    const multicolorBand = () => {
      const letters = document.getElementsByClassName('text');
      const sSpan = letters.length; // Nombre de lettres
      let whichLetter = 0;
      let trailAmount = 8;

      // Fonction pour générer une couleur aléatoire
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      // Animation de changement de couleur
      const interval = setInterval(function() {
        const rColor = getRandomColor();
        if (whichLetter < sSpan + trailAmount) {
          // Vérification si l'élément existe avant de modifier son style
          if (whichLetter > (trailAmount - 1)) {
            if (letters[whichLetter - trailAmount]) {
              letters[whichLetter - trailAmount].style.color = 'black';
            }
          }
          if (whichLetter < sSpan) {
            if (letters[whichLetter]) {
              letters[whichLetter].style.color = rColor;
            }
          }
          whichLetter++;
        } else if (whichLetter > sSpan + (trailAmount - 1)) {
          whichLetter = 0;
        }
      }, 75);

      // Nettoyage de l'intervalle lorsque le composant est démonté
      return () => clearInterval(interval);
    };

    // Ajouter l'event listener une seule fois lors du montage
    window.addEventListener("load", multicolorBand);

    // Nettoyage des écouteurs d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("load", multicolorBand);
    };
  }, []); // Le tableau vide assure que l'effet se déclenche une seule fois au montage

  return (
    <div className="flex flex-col items-center ">
      <div className="pt-14 w-full">
        <h2 className="font-ObviouslyNarrowBold" id="textBox">
          <div className="textSec"><span className="text">Y</span><span className="text">O</span><span className="text">U</span><span className="text">&apos;</span><span className="text">V</span><span className="text">E</span></div>
          <div className="textSec"><span className="text">N</span><span className="text">E</span><span className="text">V</span><span className="text">E</span><span className="text">R</span></div>
          <div className="textSec"><span className="text">H</span><span className="text">A</span><span className="text">D</span></div>
          <div className="textSec"><span className="text">A</span></div>
          <div className="textSec"><span className="text">D</span><span className="text">R</span><span className="text">I</span><span className="text">N</span><span className="text">K</span></div>
          <div className="textSec"><span className="text">L</span><span className="text">I</span><span className="text">K</span><span className="text">E</span></div>
          <div className="textSec"><span className="text">H</span><span className="text">Y</span><span className="text">P</span><span className="text">E</span><span className="text">R</span></div>
          <div className="textSec"><span className="text">S</span><span className="text">P</span><span className="text">L</span><span className="text">A</span><span className="text">S</span><span className="text">H</span></div>
        </h2>

      </div>

      <motion.div className="mt-7 p-7 border rounded-full bg-blue-300 shadow-xl"
       initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3, ease: "easeOut" }}>
        <p className="text-3xl text-center font-FuturiBlackRegular">Hyper-splash is full of <span className="font-SuperFestival text-green-500 glowing">radiation</span>,
          <span className="font-SuperFestival text-purple-600 glowing"> magical essences</span> and all sorts of things to make you <span className="font-SuperFestival text-orange-400 glowing">glow</span> in the dark.</p>
      </motion.div>
      <div className="pt-20 w-3/5 text-center pb-10">
        <div className='pb-10'>
        <span className="text-5xl font-PolySansNeutral">&#8595; </span><span className="text-5xl font-ObviouslyNarrowBold underline glowing sha">BEST SELLERS</span><span className="text-5xl font-PolySansNeutral"> &#8595;</span>
        </div>
        <motion.img
          whileHover={{ rotate: 360 }}
          className="h-24 absolute right-[278px] z-50" src="../images/stickers/bling-point-left.svg" alt="hand sticker" />
        <img className="h-24 absolute left-[278px] scale-x-[-1] z-50" src="../images/stickers/bling-point-left.svg" alt="hand sticker" />
        <PopularList/>
      </div>
    </div>
  );
};
  SecondPart.propTypes = {
    flavors: PropTypes.array
  };