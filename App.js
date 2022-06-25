import React from 'react';

import Header from '../components/ui/Header'
import {ThemeProvider} from '@material-ui/styles'
import theme from "../components/ui/Theme";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/ui/Footer";
import LandingPage from '../Landingpage';
import Services from "./Services";
import About from './About';
import Revolution from './Revolution';
import MobileApps from './MobileApp';
import Websites from './Website';


function App() {
  return (
   
 <ThemeProvider theme={theme}>
 <BrowserRouter>
 <Header/>
 <Switch>
 <Route exact  path="/" component={LandingPage} />
 <Route exact  path="/services" component={Services} />
 <Route exact  path="/customersoftware" component={()=><h2>customerSoftware</h2>} />
 <Route exact  path="/mobileapp" component={MobileApps} />
 <Route exact  path="/website" component={Websites} />
 <Route exact  path="/revolution" component={Revolution} />
 <Route exact  path="/about" component={About} />
 <Route exact  path="/contact" component={()=><h2>Contact</h2>} />
 <Route exact  path="/estimate" component={()=><h2>Estimate</h2>} />
 </Switch>
 <Footer/>
 </BrowserRouter>
 
 
 </ThemeProvider>
  
   
      

     
  )
  
}

export default App;
