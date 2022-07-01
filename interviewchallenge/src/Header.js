import './Header.css';
import SearchBar from './SearchBar.js'
import { ReactComponent as LogoImg } from './logo-symbol.svg'

function HeaderComp() {
  return (
    <div className="header">
        <LogoImg className="logo"/>
        <SearchBar classname="searchBar" />
    </div>
  );
}

export default HeaderComp;