import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{
            maxWidth: '1200px', margin: '0 auto',
            padding: '20px', border: '2px solid #ddd',
            borderRadius: '8px'
        }}>
            <header style={{
                backgroundColor: '#eee',
                padding: '10px 20px',
                borderRadius: '8px', display: "flex", justifyContent: "space-between", alignItems: "center"
            }}>
                <h1>학사 관리 프로젝트</h1>
                <div>
                    {/* 로그인, 회원가입 ui 나오게 하기*/}
                    <Link to="/login" style={{marginRight: "10px", color: "black", textDecoration: "none"}}>로그인</Link>
                    {/* <Link to="/signup" style={{ color: "white"}}>회원가입</Link> */}
                    <Link to="/signup" style={{ color: "black", textDecoration: "none"}}>회원가입</Link>
                </div>
            </header>
            <Navbar />
            <main>
                {/* Layout 컴포넌트의 태그 사이에 들어오는 JSX 요소(태그)들을 의미 */}
                {children}
            </main>
            <footer style={{
                backgroundColor: '#eee',
                color: 'white', padding: '10px',
                borderRadius: '8px', textAlign: 'center'
            }}></footer>
        </div>
    )
}

export default Layout