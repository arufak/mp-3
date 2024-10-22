import { Link } from 'react-router-dom'; // Use React Router for navigation
export default function Nav() {
    return (React.createElement("nav", null,
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Link, { to: "/" }, "Home")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/education" }, "Education")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/experiences" }, "Experiences")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/certifications" }, "Certifications")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/projects" }, "Projects")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/achievements" }, "Achievements")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/skills" }, "Skills")),
            React.createElement("li", null,
                React.createElement(Link, { to: "/references" }, "References")))));
}
;
