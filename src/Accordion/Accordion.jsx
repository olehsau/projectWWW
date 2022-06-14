import React, {useState} from 'react'
import AccordionLayout from './AccordionLayout/AccordionLayout'
import '../index.css';
import ExamplesChildren from './AccordionLayout/ExamplesChildren';
import AboutChildren from './AccordionLayout/AboutChildren';
import ProgrammingChildren from './AccordionLayout/ProgrammingChildren';

export default function Accordion() {
    
    const [activeTab, setActiveTab] = useState(1);

  return (
    <div className='accordion'>
        <div>Menu</div>

        <AccordionLayout title='Examples of my skills' children={<ExamplesChildren/>} 
        tabIndex={1} activeTab={activeTab} setActiveTab={setActiveTab}>      
        </AccordionLayout>

        <AccordionLayout title='Programming tutorials' children={<ProgrammingChildren/>}
        tabIndex={3} activeTab={activeTab} setActiveTab={setActiveTab}>
        </AccordionLayout>

        <AccordionLayout title='About' children={<AboutChildren/>} 
        tabIndex={2} activeTab={activeTab} setActiveTab={setActiveTab}>
        </AccordionLayout>
    </div>
  )
}
