import React, { useState } from 'react'
import style from './signup.module.css'
import bstyle from './board.module.css'
import { Link } from 'react-router-dom';

// 회원가입 관련 인터페이스
interface signform {
  id: string;
  email: string;
  pwd: string;
  gender: string;
  date: string;
  country: string;
  hobbies: string[];
}

// 게시판 관련 인터페이스
interface Board {
  id: number;
  title: string;
  writer: string;
  cont: string;
}

const Example: React.FC = () => {

  /* 회원가입 스크립트 start */
//상태값정의
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [gender, setGender] = useState<string>("남자");
  const [date, setDate] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);

  //홈태그에 입력한 값들을 저장할 배열
  const [member, setMember] = useState<signform[]>([]);

  //체크박스 온체인지 사용하기 위한 함수
  const hobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setHobbies([...hobbies, value]); // 체크되면 추가 하고
    } else {
      setHobbies(hobbies.filter(hobby => hobby !== value)); // 체크 해제되면 제거 
    }
  }
  //멤버 상태값을 넣을 수 있도록 하는 함수
  const addmember = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id && email && pwd && gender && date && country && hobbies) {
      // 배열 = {키:밸류, 키:밸류, ...};
      const newmember: signform = {
        id: id,
        email: email,
        pwd: pwd,
        gender: gender,
        date: date,
        country: country,
        hobbies: hobbies
      }
      //전개연산자 사용
      setMember([...member, newmember]);
      setId("");
      setEmail("");
      setPwd("");
      setGender("남자");
      setDate("");
      setCountry("");
      setHobbies([]);
    }

  }
  /* 회원가입 스크립트 end */

  /* 게시판 스크립트 start */
  const [boardList, setBoardList] = useState<Board[]>([
  {
    id: 1,
    title: "제목1",
    writer: "작성자1",
    cont: "내용1"
  },
  {
    id: 2,
    title: "제목2",
    writer: "작성자2",
    cont: "내용2"
  },
  {
    id: 3,
    title: "제목3",
    writer: "작성자3",
    cont: "내용3"
  }
]);

  /* 게시판 스크립트 start */

  return (
    <div>
      <h1>예시로 만들었어요</h1>
      <h2>회원가입</h2>
      <form className={style.form} onSubmit={addmember}>
        <label>아이디</label>
        <div className={style.inputRow}>
          <input type="text" name='username' id='username' value={id} onChange={e => setId(e.target.value)} />
          <button type='button' className={style.checkButton}>중복 확인</button>
        </div>
        <label>이메일</label>
        <input type="email" name='email' id='email' value={email} onChange={e => setEmail(e.target.value)} />
        <label>비밀번호</label>
        <input type="password" name='password' id='password' value={pwd} onChange={e => setPwd(e.target.value)} />
        <div className={style.gender}>
          <label><input type="radio" name='gender' id='gender1' value="남자" onChange={e => setGender(e.target.value)} checked={gender === "남자"} />남자</label>
          <label><input type="radio" name='gender' id='gender2' value="여자" onChange={e => setGender(e.target.value)} checked={gender === "여자"} />여자</label>
        </div>
        <div className={style.hobby}>
          <label> <input type="checkbox" value="독서" onChange={hobbyChange} checked={hobbies.includes("독서")} /> 독서 </label>
          <label> <input type="checkbox" value="여행" onChange={hobbyChange} checked={hobbies.includes("여행")} /> 여행 </label>
          <label> <input type="checkbox" value="운동" onChange={hobbyChange} checked={hobbies.includes("운동")} /> 운동 </label>
          <label> <input type="checkbox" value="게임" onChange={hobbyChange} checked={hobbies.includes("게임")} /> 게임 </label>
        </div>
        {/* 스킵라인 - 연습문제 점검 이후 */}
        <label>생년월일</label>
        <input type="date" name='birth' id='birth' value={date} onChange={e => setDate(e.target.value)} />
        <label>국가</label>
        <select name="country" id="country" value={country} onChange={e => setCountry(e.target.value)}>
          <option value="">국가선택</option>
          <option value="한국">한국</option>
          <option value="미국">미국</option>
          <option value="일본">일본</option>
          <option value="영국">영국</option>
        </select>
        <button type='submit' className={style.submitButton}>가입하기</button>
      </form>
      {/* 검수용 출력 UI - 스타일 적용 연습 및 결과 도출 테이블 */}
      <hr />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: 'pink', color: '#fff' }}>
            <th className={style.thst}>아이디</th>
            <th className={style.thst}>이메일</th>
            <th className={style.thst}>비밀번호</th>
            <th className={style.thst}>성별</th>
            <th className={style.thst}>취미</th>
            <th className={style.thst}>생년월일</th>
            <th className={style.thst}>국가</th>
          </tr>
        </thead>
        <tbody>
          {/* {peopleRows} */}
          {member.map((e, i) => (
            <tr>
              <td className={style.tdst}>{e.id}</td>
              <td className={style.tdst}>{e.email}</td>
              <td className={style.tdst}>{e.pwd}</td>
              <td className={style.tdst}>{e.gender}</td>
              <td className={style.tdst}>{e.hobbies.join(",")}</td>
              <td className={style.tdst}>{e.date}</td>
              <td className={style.tdst}>{e.country}</td>
            </tr>)
          )}

        </tbody>

      </table>


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
          {boardList.reverse().map((e, i) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              {/* 나중에 추가하실분만 일단 home으로 이동 */}
              <td><Link to={`/`} className={bstyle.titleLink}>{e.title}</Link></td>
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
              <Link to="/" className={bstyle.button}>글쓰기</Link>
            </td>
          </tr>

        </tfoot>
      </table>
    </div>
  )
}

export default Example