import React from 'react';
import './modal.css'; 

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>예약하기</h2>
        <p>원하시는 날짜와 시간을 선택해주세요.</p>
        
        <div style={{ margin: '20px 0' }}>
          <input type="date" style={{ padding: '8px', marginRight: '10px' }} />
          <input type="time" style={{ padding: '8px' }} />
        </div>

        <button className="close-btn1" onClick={onClose}>
          예약
        </button>

        <button className="close-btn2" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default ReservationModal;