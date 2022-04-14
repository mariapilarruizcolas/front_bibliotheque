// import Help from './Help';
// import Menu from './Menu';
// import Search from './Search';
// import EspaceClient from './EspaceClient';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import Logo from './Logo';




function NavBar() {
  return (
    <div className="NavBar">
      <ul>
        <li><Link to="/Menu"><img src='./assets/menu.png' alt="Menu" /></Link> </li>
        <li><Link to="/"><img src="./assets/logo.png" alt="Logo" /></Link> </li>
        <li><Logo /></li>
        <li><input type="text" id="search" name="search" placeholder="Recherche dans le catalogue" />
          <Link to="/Search"><img src="./assets/search.png" alt="Recherche" /></Link></li>
        <li><Link to="/Help"><img src="./assets/help.png" alt="Aide" /></Link> </li>
        <li><Link to="/EspaceClient"><img src="./assets/client.png" alt="Espace client" /></Link> </li>

      </ul>


    </div>
  );
}


export default NavBar;

