import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AboutMe from '../../About/AboutMe';
import AboutWebsite from '../../About/AboutWebsite';

export default function AboutChildren() {
  return (
    <Router>
    <ul>
        <li><Link to="/about-me">About me</Link></li>
        <li><Link to="/about-website">About website</Link></li>
    </ul>
    <Routes>
      <Route path="/about-me" element={<AboutMe/>}></Route>
      <Route path="/about-website" element={<AboutWebsite/>}></Route>
    </Routes>
    </Router>
  )
}
