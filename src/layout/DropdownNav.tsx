// DropdownNav.tsx
import React, { useRef, useState } from 'react'
import style from './linkactive.module.css'
import { NavLink } from 'react-router-dom';

const DropdownNav: React.FC = () => {
    // true, false에 따라서 드랍다운 여부를 결정하기 위한 상태값
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // dom 요소에 접근할 useRef
    const dropdownRef = useRef<HTMLDivElement>(null);
    // toggleDropdown 클릭이 될때 useState 값에 대한 toggle처리를 한다
    const toggleDropdown = () => {setIsOpen((prev) => !prev)} // 토글 true -> false !부정 연산
    // 드랍다운 메뉴에서 메뉴를 선택시 닫아줘야 한다.
    const closeDropdown = () => {setIsOpen(false)} // false를 해서 무조건 닫는다

    // NavLink를 사용하는 목적이기도 하고 어제 메뉴구현시 설명
    // NavLink -> isActive 제공
    const linkClass = ({isActive}:{isActive:boolean}) => 
        // 활성화가 된 상태이면 style.active를 추가한다.
        isActive ? `dropdown-item ${style.link} ${style.active}`
        : `dropdown-item ${style.link}`;
    

    return (
        <div ref={dropdownRef} className="nav-item dropdown">
            <div className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                게시판 <span></span>
            </div>
            {
                isOpen && (<div className="dropdown-menu show">
                    <NavLink to="/boardwrite" onClick={closeDropdown} className={linkClass}>게시판작성</NavLink>
                    <NavLink to="/boardlist" onClick={closeDropdown} className={linkClass}>게시판목록</NavLink>
                </div>)
            }
        </div>
    )
}

export default DropdownNav