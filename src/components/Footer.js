import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation
export default function Footer() {
    return (React.createElement("footer", null,
        React.createElement("h6", null, "Graduating in May 2025 | Open to New Grad Roles | Open to Relocation | US Citizen"),
        React.createElement("h6", null,
            "919-758-2296 |",
            ' ',
            React.createElement("a", { href: "mailto:arufamanar1@gmail.com", target: "_blank", rel: "noopener noreferrer" }, "arufamanar1@gmail.com")),
        React.createElement("p", null,
            React.createElement("a", { href: "https://github.com/arufak", target: "_blank", rel: "noopener noreferrer" }, "GitHub"),
            " |",
            ' ',
            React.createElement("a", { href: "https://www.linkedin.com/in/arufa-khanom", target: "_blank", rel: "noopener noreferrer" }, "LinkedIn")),
        React.createElement("h6", null,
            "\u00A9 2024 Arufa Khanom | All Rights Reserved |",
            ' ',
            React.createElement(Link, { to: "/Credits" }, "Credits"))));
}
