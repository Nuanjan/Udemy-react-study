import React from 'react';
import "./resources/styles.css"
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueINFO from './components/venueINFO';
import Highlight from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{height: "1500px", background: 'silver'}}>
      <Header/>
      <Element name="featured"><Featured /></Element>
      <Element name="venueInfo"><VenueINFO /></Element>
      <Element name="highlight"><Highlight/></Element>
      <Element name="pricing"><Pricing /></Element>
      <Element name="location"><Location /></Element>
      <Footer/>
    </div>
  );
}

export default App;
