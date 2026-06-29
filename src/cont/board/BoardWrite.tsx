import React, { useState } from 'react'
import style from './signup.module.css'
import { useNavigate } from 'react-router-dom';

// 게시판 관련 인터페이스
interface Board {
    id: number;
    title: string;
    writer: string;
    cont: string;
}

const BoardWrite: React.FC = () => {

    //로컬스토리지의 모든값을 지우는 테스트용 버튼입니다
    const deleteBT = () => {
        localStorage.clear();
        setBoardList([]);
    }

    //컴포넌트내에서 사용할 상수형 useState선언
    const [title, setTitle] = useState<string>();
    const [writer, setWriter] = useState<string>();
    const [cont, setCont] = useState<string>();

    //메인 배열 useState선언
    const [boardList, setBoardList] = useState<Board[]>([]);
    //버튼타입이 form태그(onSubmit) : useNavigate로 이동합니다
    const navigate = useNavigate();


    //onSubmit이벤트에 바인딩된 함수입니다
    const listUp = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); //post-off
        // 1. 더미배열(로컬스토리지 전용)에 기존 로컬스토리지의 값을 받아옴
        const currentLocalBoardList = JSON.parse(localStorage.getItem("write") || "[]");
        const numRef = currentLocalBoardList.length+1;
        if (title && writer && cont) {
            //새 회원을 받기 위한 더미배열 생성
            const newBoardList: Board = {
                id: numRef,
                title: title,
                writer: writer,
                cont: cont

            }

            // 2. 꺼내온 기존 배열에 새 회원을 스프레드로 합침
            const updatedLocalBoardList = [...currentLocalBoardList, newBoardList];

            // 3. 로컬스토리지에 저장
            localStorage.setItem("write", JSON.stringify(updatedLocalBoardList));

            //기존 회원배열에 새 회원 배열을 스프레드 연산
            setBoardList([...boardList, newBoardList]);

            //초기화식
            setTitle("");
            setWriter("");
            setCont("");
            //함수 실행영역 마지막에 게시판 화면으로 이동(강제성을 부여합니다)
            navigate('/boardList');
        }
    }


    return (
        <div>
            <h2>글쓰기</h2>

            <form className={style.form} onSubmit={listUp}>
                <label>제목</label>
                <div className={style.inputRow}>
                    <input type="text" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <label>글쓴이</label>
                <div className={style.inputRow}>
                    <input type="text" name='writer' id='writer' value={writer} onChange={e => setWriter(e.target.value)} />
                </div>
                <label>내용</label>
                <div className={style.inputRow}>
                    <input type="text" name='cont' id='cont' value={cont} onChange={e => setCont(e.target.value)} />
                </div>
                <button type='submit' className={style.submitButton}>작성하기</button>
            </form>
            {/* 로컬스토리지를 비우기 위한 테스트용 버튼입니다 최종제출 전에 삭제하기를 권장드립니다 */}
            <button style={{ textAlign: "center" }} onClick={deleteBT}>로컬스토리지비우기</button>
        </div>
    )
}

export default BoardWrite