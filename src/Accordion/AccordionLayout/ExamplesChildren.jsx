import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ScrollComponent from '../../ScrollComponent';
import ParallaxComponent from '../../ParallaxComponent';

export default function ExamplesChildren() {
  return (
    <Router>
        <ul>
            <li><Link to="/scroll">infinite scroll</Link></li>
            <li><Link to="/parallax">parallax scroll</Link></li>
        </ul>
        <Routes>
          <Route path='/scroll' element={<ScrollComponent/>} />
          <Route path='/parallax' element={<ParallaxComponent/>} />
        </Routes>
    </Router>
  )
}
