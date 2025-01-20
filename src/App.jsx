import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Project from './components/Project.jsx';
import Experience from './components/Experience.jsx';
import About from './components/About.jsx';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Project" element={<Project />} />
                <Route path="/Experience" element={<Experience />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;