import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import Accordion from './Accordion/Accordion';
import ScrollComponent from './ScrollComponent';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function MainComponent() {

    return (
        <ParallaxProvider>

            <div>
                <Accordion/>
            </div>
            <div className='main'>
           
            </div>
            
        </ParallaxProvider>
    )
}
