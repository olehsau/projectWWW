import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import JavaTutorial from '../../Tutorials/JavaTutorial';
import CppTutorial from '../../Tutorials/CppTutorial';
import JavascriptTutorial from '../../Tutorials/JavascriptTutorial';

export default function ProgrammingChildren() {
  return (
    <Router>
    <ul>
        <li><Link to="/java">Java</Link></li>
        <li><Link to="/cpp">C++</Link></li>
        <li><Link to="/javascript">JavaScript</Link></li>
    </ul>
    <Routes>
      <Route path="/java" element={<JavaTutorial/>}></Route>
      <Route path="/cpp" element={<CppTutorial/>}></Route>
      <Route path="/javascript" element={<JavascriptTutorial/>}></Route>
    </Routes>
    </Router>
  )
}
