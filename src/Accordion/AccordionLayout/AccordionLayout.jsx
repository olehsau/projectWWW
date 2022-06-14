import React from 'react'
import '../../index.css';
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function AccordionLayout({title, children, tabIndex, activeTab, setActiveTab}) {
  
    return (
    <div>
        <div className='accordionTitle' onClick={()=>{
            if(tabIndex===activeTab){
                setActiveTab(-1);
            }
            else{
                setActiveTab(tabIndex);
            }
            }}>
            {(tabIndex === activeTab) ? <BsFillArrowUpCircleFill/> : <BsFillArrowDownCircleFill/>}
            <span>{title}</span>
        </div>
        {
            (tabIndex === activeTab) && (<div>{children}</div>)
        }
    </div>
  )
}
