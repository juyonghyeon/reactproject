import React from 'react';
import { NavLink } from 'react-router-dom';
import DropdownNav from './DropdownNav';

const Navbar: React.FC = () => {
  const commonLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        {/* 메뉴 */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={commonLinkClass}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/example" className={commonLinkClass}>내용1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content2" className={commonLinkClass}>내용2</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content3" className={commonLinkClass}>내용3</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content4" className={commonLinkClass}>내용4</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content4" className={commonLinkClass}>내용5</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/content4" className={commonLinkClass}>내용6</NavLink>
            </li>
            {/* 드롭다운 */}
            <li className="nav-item">
              <DropdownNav />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;