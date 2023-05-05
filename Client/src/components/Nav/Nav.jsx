import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch, setAccess }) => {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav className={style.nav}>

            <div className={style.btns}>
                <NavLink className={style.home} to='/about'> ABOUT </NavLink>
                <NavLink className={style.home} to='/home'> HOME </NavLink>
                <NavLink className={style.home} to='/favorites'>FAVORITES</NavLink>
            </div>

            <button className={style.home} onClick={handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;