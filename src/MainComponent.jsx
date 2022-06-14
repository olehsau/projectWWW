import React, { useState } from 'react'
import ReactDOM from 'react-dom/client';
import Accordion from './Accordion/Accordion';
import ScrollComponent from './ScrollComponent';

export default function MainComponent() {

    return (
        <div>
            <div>
                <Accordion/>
            </div>
            <div className='main'>
           
            </div>
        </div>
    )
}
