import { NavLink } from "react-router-dom";

const Navbar =()=>{
return  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <NavLink  className="navbar-brand" to="/" style={{fontSize:'22px',fontWeight:'bold',marginLeft:'15px'}}> Live Covid Tracker</NavLink>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                       <NavLink activeclassname="menu_active" className="nav-link " to="/">INDIA</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink activeclassname="menu_active" className="nav-link " to="/statewise">Statewise</NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink activeclassname="menu_active" className="nav-link " to="/countrywise">Countrywise</NavLink>
                     </li>
                   </ul>
                 </div>
             </nav>  ;
}

export default Navbar;