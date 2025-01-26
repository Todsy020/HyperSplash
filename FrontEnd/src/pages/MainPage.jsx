import { useState, useEffect } from 'react';
import { Footer } from '../components/Footer.jsx';
import {FirstPart} from '../components/MainPage/FirstPart.jsx';
import { FourthPart } from '../components/MainPage/FourthPart.jsx';
import {SecondPart} from '../components/MainPage/SecondPart.jsx';
import {ThirdPart} from '../components/MainPage/ThirdPart.jsx';
import { NavBar } from '../components/NavBar.jsx';



export const MainPage = () => {
  const [reviews, setReviews] = useState([])
  const [flavorsImages, setFlavorsImages] = useState([])
const MobileAlert = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768; // Vérifie si l'utilisateur est sur mobile
    const hasAlerted = localStorage.getItem('alerted'); // Vérifie si l'alerte a déjà été montrée

    if (isMobile && !hasAlerted) {
      alert("The current version of this site does not support mobile devices. Please use a desktop browser.");
      localStorage.setItem('alerted', 'true'); // Marque l'alerte comme affichée
    }
  }, []); // Exécution au premier rendu du composant (lors de l'arrivée sur la page)

  return <div>Content of your page</div>;
  };
  MobileAlert();
  useEffect(() => {
    fetch('http://localhost:5000/api/mainpage')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
        setFlavorsImages(data.flavorsImages);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
        <div className='overflow-hidden'>
      <NavBar/>
      <FirstPart/>
      <SecondPart />
      <ThirdPart flavorsImages={flavorsImages} />
      <FourthPart reviews={ reviews } flavorsImages={flavorsImages} />
      <Footer/>
      </div>
  )
}
