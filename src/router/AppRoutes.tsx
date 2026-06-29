import { Route, Routes } from "react-router-dom"
import Home from "../cont/Home"
import BoardWrite from "../cont/board/BoardWrite"
import BoardList from "../cont/board/BoardList"
import BoardeDeltail from "../cont/board/BoardeDeltail"
import Login from "../cont/member/Login"
import Signup from "../cont/member/Signup"
import Diary from "../cont/diary/Diary"
// 라우터란?
// 사용자가 입력한 주소를 감지하는 역할을 하며, 
// 여러 환경에서 동작할 수 있도록 여러 종유의 라우터 컴포넌트를 제공
// 라우터 기본 구성
{/* 
<Router>
  <Routes>
    <Route path='/컴포넌트 실행위치' element={<컴포넌트 />} />
  </Routes>
</Router> 

AppRoutes의 구성
1. routeList에 자바스크립트 객체 형태로 패스와 라우터 하고자 하는 컴포넌트 정의
2. routeList를 Routes안에 Route 형태로 뿌려준다(작성한다)
3. 결국 routeList에 입력한 값들을 아래처럼 만들어 내기위해 AppRoutes 컴포넌트를 작성하였다
<Routes>
    <Route path='/컴포넌트 실행위치1' element={<컴포넌트1 />} />
    <Route path='/컴포넌트 실행위치2' element={<컴포넌트2 />} />
    <Route path='/컴포넌트 실행위치3' element={<컴포넌트3 />} />
    <Route path='/컴포넌트 실행위치4' element={<컴포넌트4 />} />
    <Route path='/컴포넌트 실행위치5' element={<컴포넌트5 />} />
    ...
  </Routes>
*/}

const AppRoutes: React.FC = () => {
    const routeList = [
        { path: '/', element: <Home /> },
        // board
        { path: '/boardwrite', element: <BoardWrite /> },
        { path: '/boardlist', element: <BoardList /> },
        { path: '/board/:id', element: <BoardeDeltail/> },
        { path: '/login', element: <Login/> },
        { path: '/signup', element: <Signup/> },
        { path: '/diary', element: <Diary /> },
    //     { path: '/board', element: <BoardList /> }, // 게시판 목록
//      { path: '/위치', element: <컴포넌트명 /> },
//      위치에 오는 값은 Navbar.tsx와 DropdownNav.tsx의 
//      to 부분과 맞추어야 네비 작동
    ]
    // 나중에 참고 하셔서 넣으시면 됩니다
    return (
        <Routes>
            {
                routeList.map((route, idx) => (
                    <Route key={idx} {...route} />
                ))
            }
        </Routes>
    )
}

export default AppRoutes