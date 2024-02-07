import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteSwitch from './RouteSwitch';
import Home from '../views/Homepage/index'
import NotFound from '../views/NotFound'
import Header from '../components/Site/Header';
import Footer from '../components/Site/Footer';
import CopyRight from '../components/Site/Footer/CopyRight';
import Sidenav from '../components/Site/Sidenav/index.js'
import { Stack, useBreakpointValue } from '@chakra-ui/react';
import About from '../views/About';
import Services from '../views/Services';
import OurBrands from '../views/OurBrands';
import Industries from '../views/Industries';
import Teams from '../views/Teams';
import Products from '../views/Products';
import Technology from '../views/Technology';
import News from '../views/News';
import Contact from '../views/Contact';
import Careers from '../views/Careers';

export const UserContext = createContext()

export default function AppRoute() {

    const [isEffectsEnabled, setisEffectsEnabled] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisEffectsEnabled(true);
        }, 6000);
    }, [])


    const bodySettings = {
        base: {
            overflowX: 'hidden',
            position: 'relative',
            overflowY: isEffectsEnabled ? 'auto' : 'hidden',
            height: isEffectsEnabled ? 'auto' : 'auto'
        },
        md: {
            overflowX: 'hidden',
            position: 'relative',
            overflowY: isEffectsEnabled ? 'auto' : 'hidden',
            height: isEffectsEnabled ? 'auto' : 'auto'
        },
        '2xl': {
            overflowX: 'hidden',
            position: 'relative',
            overflowY: isEffectsEnabled ? 'auto' : 'hidden',
            height: isEffectsEnabled ? 'auto' : 'auto'
        }
    }

    return (
        // Added margin for fixed Footer and overFlow because of flying circle
        <Stack sx={useBreakpointValue(bodySettings)}>
            <Router>
                <Header />
                {/* <Sidenav setisEffectsEnabled={setisEffectsEnabled} /> */}
                <RouteSwitch>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/services" element={<Services />}></Route>
                    <Route exact path="/brands" element={<OurBrands />}></Route>
                    <Route exact path="/Industries" element={<Industries />}></Route>
                    <Route exact path="/teams" element={<Teams />}></Route>
                    <Route exact path="/Products" element={<Products />}></Route>
                    <Route exact path="/Technology" element={<Technology />}></Route>
                    <Route exact path="/news" element={<News />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route exact path="/careers" element={<Careers />}></Route>
                    <Route exact path="*" element={<NotFound />}></Route>
                </RouteSwitch>
                <Footer>
                    <CopyRight />
                </Footer>
            </Router>
        </Stack>
    )
}