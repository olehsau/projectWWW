import React from 'react'

export default function AboutWebsite() {
  return (
    <div>
        <h3>About Website</h3>
        <p>First of all thank you for visiting my website. In this section I would like to briefly explain which technologies it uses.</p>
        <h4>React</h4>
        <p>Yes, it uses React to make all these components you see and switch with another ones.</p>
        <img src='..\..\res\logo512.png'></img>
        <p>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
        <h4>Bootstrap</h4>
        <p>Actually this website doesn't use Bootstrap, but I am planning to add it, to make website look more elegant.</p>
        <img src='..\..\res\Bootstrap_logo.svg'></img>
        <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
    </div>
  )
}
