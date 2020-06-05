import React, {Component} from 'react';
import './resources/styles.css';
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from './components/featured'
import VenueNfo from './components/venueNFO'
import Highlights from './components/Highlight'
import Pricing from './components/Pricing'
import Location from './components/Location'
import Footer from './components/header_footer/Footer'


class App extends Component {
  render(){
    return(
      <div className="App" style={{ height:'1500px', background:'cornflowerblue' }}>
        <Header/>

        <Element name='Event'>
          <Featured />
        </Element>

        <Element name='NFO'>
          <VenueNfo />
        </Element>

        <Element name='Highlights'>
          <Highlights />
        </Element>

        <Element name='Price'>
          <Pricing />
        </Element>
        
        <Element name='Locat'>
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
