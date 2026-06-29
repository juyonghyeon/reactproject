import React, { useState, useEffect, useRef } from 'react' // 1. useEffect, useRef 임포트
import './SignupForm.css';

// 인터페이스 정의
interface signform {
  studentId: string;   // 학번
  name: string;        // 이름
  email: string;       //이메일 
  pwd: string;         //비밀번호
  role: string;        // 구분 (학생/교수/임직원)
  department: string;  // 학과
  birthDate: string;   // 생년월일
}

interface NoticeProps {
  infoMessage: string;
}
const SignupNotice: React.FC<NoticeProps> = ({ infoMessage }) => {
  return (
    <div style={{ padding: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', fontSize: '0.85rem', color: '#4a5568', marginTop: '15px' }}>
       [학사 안내] {infoMessage}
    </div>
  );
};

const Signup: React.FC = () => {
  // 상태값 정의
  const [studentId, setStudentId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [role, setRole] = useState<string>("학생");
  const [department, setDepartment] = useState<string>("");
  const [birthDate, setBirthDate] = useState<string>("");

  // 홈태그에 입력한 값들을 저장할 배열
  const [member, setMember] = useState<signform[]>([]);

  //학번 입력 필드 접근용
  const studentIdRef = useRef<HTMLInputElement>(null);

  //컴포넌트가 처음 켜질 때
  useEffect(() => {
    if (studentIdRef.current) {
      studentIdRef.current.focus();
    }
  }, []);

  //member 상태가 변경될 때마다 실행 
  useEffect(() => {
    if (member.length > 0) {
      console.log(`현재까지 등록된 총 학적 인원: ${member.length}명`);
    }
  }, [member]);

  // 학적 등록 함수
  const addMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   
    if (studentId && name && email && pwd && role && department && birthDate) {
      const newMember: signform = {
        studentId,
        name,
        email,
        pwd,
        role,
        department,
        birthDate
      };

      setMember([...member, newMember]);
      
      // 폼 초기화
      setStudentId("");
      setName("");
      setEmail("");
      setPwd("");
      setRole("학생");
      setDepartment("");
      setBirthDate("");

      // 등록 완료 후 다시 학번 입력창으로 포커스 이동
      if (studentIdRef.current) {
        studentIdRef.current.focus();
      }
    } else {
      alert("모든 학적 정보를 입력해주세요.");
    }
  };

  return (
    <div className="signupContainer">
      <h2>학사관리 시스템 회원가입</h2>
      <form className="form" onSubmit={addMember}>
        
        {/* 학번 입력 (필수) */}
        <label htmlFor="studentId">학번 / 사번</label>
        <div className="inputRow">
          <input 
            ref={studentIdRef}
            type="text" 
            id='studentId' 
            placeholder="8자리 숫자를 입력하세요"
            value={studentId} 
            onChange={e => setStudentId(e.target.value)} 
          />
          <button type='button' className="checkButton">학번 조회</button>
        </div>

        {/* 이름 입력 */}
        <label htmlFor="name">이름 (본명)</label>
        <input 
          type="text" 
          id='name' 
          placeholder="이름을 입력해주세요."
          value={name} 
          onChange={e => setName(e.target.value)} 
        />

        {/* 사용자 구분 */}
        <label>사용자 구분</label>
        <div className="gender">
          <label>
            <input type="radio" name='role' value="학생" onChange={e => setRole(e.target.value)} checked={role === "학생"}/> 학생
          </label>
          <label>
            <input type="radio" name='role' value="교수" onChange={e => setRole(e.target.value)} checked={role === "교수"} /> 교수
          </label>
          <label>
            <input type="radio" name='role' value="교직원" onChange={e => setRole(e.target.value)} checked={role === "교직원"} /> 교직원
          </label>
        </div>

        {/* 소속 학과 선택 */}
        <label htmlFor="department">소속 학과</label>
        <select id="department" value={department} onChange={e => setDepartment(e.target.value)}>
          <option value="">학과를 선택하세요</option>
          <option value="컴퓨터공학과">컴퓨터공학과</option>
          <option value="전자공학과">전자공학과</option>
          <option value="경영학과">경영학과</option>
          <option value="시각디자인학과">시각디자인학과</option>
        </select>

        {/* 이메일 */}
        <label htmlFor="email">이메일</label>
        <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} />

        {/* 비밀번호 */}
        <label htmlFor="password">비밀번호</label>
        <input type="password" id='password' value={pwd} onChange={e => setPwd(e.target.value)} />

        {/* 생년월일 */}
        <label htmlFor="birth">생년월일</label>
        <input type="date" id='birth' value={birthDate} onChange={e => setBirthDate(e.target.value)} />

        <button type='submit' className="submitButton">학적 등록하기</button>
      </form>

      <SignupNotice infoMessage="허위 정보 입력 시 학칙에 의거하여 징계 조치될 수 있습니다." />

      <hr />
      
      <h3>🎓 가입된 학적 명단 ({member.length}명)</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4A5568', color: '#fff' }}>
            <th className="thst" style={{ padding: '8px' }}>학번</th>
            <th className="thst">이름</th>
            <th className="thst">구분</th>
            <th className="thst">학과</th>
            <th className="thst">이메일</th>
            <th className="thst">생년월일</th>
          </tr>
        </thead>
        <tbody>
          {member.map((m, i) => (
            <tr key={m.studentId + i} style={{ borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
              <td className="thst" style={{ padding: '8px' }}>{m.studentId}</td>
              <td className="thst">{m.name}</td>
              <td className="thst">{m.role}</td>
              <td className="thst">{m.department}</td>
              <td className="thst">{m.email}</td>
              <td className="thst">{m.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Signup;