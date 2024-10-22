import React from 'react';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import References from './components/References';
import Skills from './components/Skills';
import Credits from './components/Credits';
import './style.css';
function Root() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement(Nav, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: '/', element: React.createElement(Home, null) }),
                React.createElement(Route, { path: '/projects', element: React.createElement(Projects, null) }),
                React.createElement(Route, { path: '/education', element: React.createElement(Education, null) }),
                React.createElement(Route, { path: '/experiences', element: React.createElement(Experiences, null) }),
                React.createElement(Route, { path: '/achievements', element: React.createElement(Achievements, null) }),
                React.createElement(Route, { path: '/certifications', element: React.createElement(Certifications, null) }),
                React.createElement(Route, { path: '/references', element: React.createElement(References, null) }),
                React.createElement(Route, { path: '/skills', element: React.createElement(Skills, null) }),
                React.createElement(Route, { path: "/credits", element: React.createElement(Credits, null) }))),
        React.createElement(Footer, null)));
}
;
const router = createBrowserRouter([
    { path: "*", Component: Root },
]);
export default function App() {
    return React.createElement(RouterProvider, { router: router });
}
