import "./App.css"
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
function NavBar() {
    return (    
    <nav>
        <ul className="list-container">
          <Link to="/" className="top-menu-button">
            ⌂ {/* Unicode character for a home symbol */}
          </Link>
          <Link to="/settings" className="top-menu-button">
            ⚙ {/* Unicode character for a gear symbol */}
          </Link>
        </ul>
      </nav>
      
      );
}

export default function Header() {
    return (
    <>
        <div className="constant-header">
        <header>
          <Link className="logo-link" to="/"><img src='typeblitz-logo.png' id="logo" alt="TypeBlitz Logo" /></Link>
          <div className="title">
            <Link to="/" id="pingutype-header">
              TypeBlitz
            </Link>
            <p className="subtext">Type into a better world!</p>
          </div>
        </header>
      </div>  
      <NavBar />
    </>
    );
}