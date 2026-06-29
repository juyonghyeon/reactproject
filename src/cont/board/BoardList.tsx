import React, { useEffect, useState } from 'react'
import bstyle from './board.module.css'
import { Link } from 'react-router-dom';

// 게시판 관련 인터페이스
interface Board {
    id:number;
    title: string;
    writer: string;
    cont: string;
}

const BoardList: React.FC = () => {

    //로컬스토리지의 모든값을 지우는 테스트용 버튼입니다
    const deleteBT = () =>{
        localStorage.clear();
        setBoardList([]);
    }

    //메인 배열 useState선언  
    const [boardList, setBoardList] = useState<Board[]>([]);

    // 브라우저 로딩과 동시에 로컬스토리지에 있는 데이터를 불러오도록 설정합니다 
    // 로컬스토리지가 비어있는 초기상태면 더미데이터를 출력합니다
    useEffect(() => {
        //로컬스토리지에 저장된 데이터(boardWrite)를 가져와 더미베열에 저장
        const currentLocalBoardList = JSON.parse(localStorage.getItem("write") || "[]");
        //컴포넌트에 선언된 메인배열에 스프레드 연산
        setBoardList([...currentLocalBoardList, boardList]);
    }, [])


    return (
        <div>
            <h2>게시판(board)</h2>
            <table className={bstyle.boardTable}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* i=1 ; i<배열의길이 ; i++ */}
                    {boardList.map((e,i) => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            {/* 나중에 추가하실분만 일단 home으로 이동 */}
                            <td><Link to={`/board/${e.id}`} className={bstyle.titleLink}>{e.title}</Link></td>
                            <td>{e.writer}</td>
                        </tr>
                    ))
                    }
                </tbody>
                <tfoot>
                    {/* BoardForm으로 이동할 버튼 */}
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>
                            {/* 나중에 추가하실분만 일단 home으로 이동 */}
                            <Link to="/boardWrite" className={bstyle.button}>글쓰기</Link>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3} style={{ textAlign: "center" }}>
                            {/* 로컬스토리지를 비우기 위한 테스트용 버튼입니다 최종제출 전에 삭제하기를 권장드립니다 */}
                            <button onClick={deleteBT}>로컬스토리지비우기</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default BoardList