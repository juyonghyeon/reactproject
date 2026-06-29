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
        <div className="collapse navbar-collapse bg-warning" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={commonLinkClass}>메인 페이지</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/diary" className={commonLinkClass}>주년 행사</NavLink>
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