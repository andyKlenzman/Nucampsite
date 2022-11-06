import React from 'react';
import Footer from './components/Footer';
import './App.css';
import NucampLogo from './app/assets/img/logo.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import CampsiteCard from './features/campsites/CampsiteCard';
import { CAMPSITES } from './app/shared/CAMPSITES';
import CampsiteList from './features/campsites/CampsiteList';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import {Routes, Route} from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import Homepage from './pages/Homepage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';

function App() {
  return (
    <div className='App'>
            <Header />
            <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='contact' element={<ContactPage />}></Route>
              <Route path='directory' element={<CampsitesDirectoryPage />}></Route>
              <Route path='directory/:campsiteId' element={<CampsiteDetailPage />}></Route>
            </Routes>
            <Footer />
        </div>
  );
}

export default App;
