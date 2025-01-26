import { Routes, Route } from 'react-router'
import './index.scss'
import {ScrollToTop} from './util/ScrollToTop';
import { MainPage } from './pages/MainPage.jsx'
import { Shop } from './pages/Shop.jsx'
import { ContactPage } from './pages/ContactPage.jsx';
import { SingleFlavorPage } from './pages/SingleFlavorPage.jsx';
import { Community } from './pages/Community.jsx';
import { Faq } from './pages/Faq.jsx';
import { InfiniteScroll } from './components/MainPage/InfiniteScroll.jsx';
function App() {

  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/flavors/:id' element={<SingleFlavorPage />} />
        <Route path='/test' element={<InfiniteScroll />} />
        <Route path='/community' element={<Community />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
      
    </div>
  )}

export default App
