import React, { useEffect, useState } from 'react'
import Style from './board.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

interface Board {
    id: number;
    title: string;
    writer: string;
    cont: string;
}

const BoardeDeltail: React.FC = () => {


    //메인배열 선언
    const [boardList, setBoardList] = useState<Board[]>([]);
    //네비게이션도 선언
    const navigate = useNavigate();

    //useEffect목적 : 로컬스토리지속 배열 데이터를 해당 컴포넌트 내부에서 사용할 배열로 받아옵니다
    useEffect(() => {
        //로컬스토리지에 저장된 데이터(boardWrite)를 가져와 더미베열에 저장
        const currentLocalBoardList = JSON.parse(localStorage.getItem("write") || "[]");
        //컴포넌트에 선언된 메인배열에 스프레드 연산
        setBoardList(currentLocalBoardList);
    }, [])
    //useParams : 해당 컴포넌트로 이동할때 받아온 파라미터값을 맵핑합니다
    const { id } = useParams();
    // 파라미터는 무조건 문자열로 넘어오기 때문에 별도의 전처리 작업이 필요합니다 (parseInt도 가능합니다)
    const numericId = Number(id);
    //console.log(numericId);
    // 파라미터에서 보낸 e.id값을 로컬스토리지에서 꺼낸 배열과 매치시켜 새로운 배열로 반환합니다(SQL-JOIN문 or 인라인뷰라고 보셔도 무방합니다)
    //console.log("현재 보드 리스트 상태:", boardList);
    // 파라미터에서 받아온 id와 로컬스토리지에서 꺼내온 id를 대조하여 사용자가 선택한 제목과 데이터가 일치하는 배열을 반환합니다
    const boardListDeltail = boardList.find(e => e.id === numericId);
    //console.log("현재 boardListDeltail 상태:", boardListDeltail);

    //로컬스토리지의 모든값을 지우는 테스트용 버튼입니다
    const deleteBT = () => {
        localStorage.clear();
        //로컬스토리지 삭제와 동시에 화면이 초기화되도록 설계합니다
        setBoardList([]);
    }

    //삭제버튼에 바인딩된 함수입니다
    const delBoard = () => {
        //useEffect에서 받아온 배열의 id를 부정연산해서 필터조건을 겁니다
        const updatedList = boardList.filter((e: any) => e.id !== numericId);
        //비어있는 배열 자체를 원래 객체(배열)이 존제하던 자리에 그대로 바인딩하여 값을 초기화 하는 개념으로 삭제합니다
        localStorage.setItem("write", JSON.stringify(updatedList));
        //삭제와 동시에 리스트로 이동할수있도록 설계합니다
        navigate('/boardList');
    }
    return (
        <div className={Style.container}>
            <h2>게시글 상세</h2>
            <table className={Style.boardTable}>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>
                            {/* 
                                리스트?.키 : 체이닝연산 
                                체이닝연산이란? 언디파인드로 예상되는 값은 컴파일러가 사용할수없도록 락을 겁니다
                                객체에 ?를 걸으므로써(개발자의 의도) 언디파인드를 의심하는 컴파일러를 강제로 해제시킵니다
                            */}
                            {boardListDeltail?.title}
                        </td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>
                            {boardListDeltail?.writer}
                        </td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>
                            {boardListDeltail?.cont}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={2} style={{ textAlign: "center" }}>
                            <button className={Style.button} onClick={delBoard}>삭제</button>
                            <Link to="/boardlist" className={Style.button} style={{ marginLeft: '10px' }}>
                                리스트
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ textAlign: "center" }}>
                            {/* 로컬스토리지를 비우기 위한 테스트용 버튼입니다 최종제출 전에 삭제하기를 권장드립니다 */}
                            <button onClick={deleteBT}>로컬스토리지비우기</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default BoardeDeltail