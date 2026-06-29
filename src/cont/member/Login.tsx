import React, { useState, useEffect, useRef } from 'react';
import './LoginForm.css';

interface NoticeProps {
  message: string;
}

const LoginNotice: React.FC<NoticeProps> = ({ message }) => {
  return (
    <div className="login-notice" style={{ marginTop: '15px', padding: '10px', backgroundColor: '#edf2f7', borderRadius: '6px', fontSize: '0.85rem', color: '#4a5568' }}>
       {message}
    </div>
  );
};

const Login: React.FC = () => {
  // 상태(State) 관리
  const [studentId, setStudentId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>('');


  const idInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {

    if (idInputRef.current) {
      idInputRef.current.focus();
    }
    console.log("로그인 컴포넌트가 화면에 나타났습니다.");
  }, []); 
  // FormEvent -> SubmitEvent
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!studentId || !password) {
      setError('학번(사번)과 비밀번호를 모두 입력해주세요.');
      return;
    }

    console.log('학사 로그인 시도:', { studentId, password });
    alert('인증 요청 성공!');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">학사관리 시스템</h1>
        <p className="login-subtitle">통합 학사정보 서비스를 위해 로그인해주세요.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label htmlFor="studentId" className="input-label">학번 / 사번</label>
           
            <input
              ref={idInputRef} 
              id="studentId"
              type="text"
              placeholder="학번 또는 사번을 입력하세요"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">비밀번호</label>
            <div className="password-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-button"
              >
                {showPassword ? '숨기기' : '보기'}
              </button>
            </div>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit-button">
            학사 시스템 로그인
          </button>
        </form>

        
        <LoginNotice message="비밀번호 분실 시 학사지원과(02-123-4567)로 문의 바랍니다." />

        <div className="login-footer">
          <span className="footer-text">신입생/신임교원 이신가요?</span>
          <a href="/signup" className="signup-link">학적 등록하기</a>
        </div>
      </div>
    </div>
  );
};

export default Login;