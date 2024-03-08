import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return (
      <nav className="navbar navbar-expand-lg header">
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">PratiCinema</Link>
          
          <button className="navbar-toggler" type="button"
              data-bs-toggle="collapse" data-bs-target="#navbarNav" data-bs-auto-close="true" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/film">Film</Link>
              </li>
              
              <li className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/rules">Rules</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
}