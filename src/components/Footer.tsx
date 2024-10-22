import { Link } from 'react-router-dom'; // Use React Router for navigation

export default function Footer() {
  return (
    <footer>
      <h6>Graduating in May 2025 | Open to New Grad Roles | Open to Relocation | US Citizen</h6>
      <h6>
        919-758-2296 |{' '}
        <a href="mailto:arufamanar1@gmail.com" target="_blank" rel="noopener noreferrer">
          arufamanar1@gmail.com
        </a>
      </h6>
      <p>
        <a href="https://github.com/arufak" target="_blank" rel="noopener noreferrer">
          GitHub
        </a> |{' '}
        <a href="https://www.linkedin.com/in/arufa-khanom" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
      <h6>
        &copy; 2024 Arufa Khanom | All Rights Reserved |{' '}
        <Link to="/Credits">Credits</Link>
      </h6>
    </footer>
  );
}