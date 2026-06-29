import React from 'react'
import HTMLFlipBook from 'react-pageflip';

// react-pageflip 라이브러리의 컴포넌트 Props 타입
interface Diary_filpe {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  showCover?: boolean;
  autoSize?: boolean;
  maxShadowOpacity?: number;
  mobileScrollSupport?: boolean;
}

const myData = [
  {
    img: "images/farm1.jpg",
    text: 'A'
  },
  {
    img: "images/farm2.jpg",
    text: 'B'
  },
  {
    img: "images/farm3.jpg",
    text: 'C'
  },
  {
    img: "images/farm4.jpg",
    text: 'D'
  },
  {
    img: "images/farm6.jpg",
    text: 'E'
  }
]

const Diary: React.FC = () => {
  //yarn add react-pageflip
  return (
    <div style={{ textAlign: "center", marginTop: "20px auto" }}>
      <h1>역대 주년 행사</h1>
      <div style={{
        width: "620px", margin: "20px auto",
        overflow: "hidden", borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
      }}>
        <HTMLFlipBook width={300} height={400} showCover={true}
          {...({ style: {}, usePortrait: true } as any)}
          autoSize={true} mobileScrollSupport={true} maxShadowOpacity={0.2}
          usePortrait={true}
        >
          {
            (() => myData.flatMap((entry, idx) => [
              // 이미지 페이지 (다이어리의 우측페이지)
              <div key={`img-${idx}`} style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
                <img src={entry.img} alt={`Diary Image ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>,

              //텍스트 페이지 (다이어리의 좌측페이지)
              <div key={`txt-${idx}`} style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                fontSize: '18px',

              }}>
                 <img src={entry.img} alt={`Diary Image ${idx + 1}`} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                <p style={{ margin: 0 }}>202{idx}년 행사 : {entry.text}</p>
              </div>
            ]))()
          }
        </HTMLFlipBook>
      </div>
    </div>
  )
}

export default Diary