import { useState } from "react";
import "./product.css";
import ReservationModal from './ReservationModal';



export interface GalleryType {
    num: number;
    ptitle: string;
    pcont: string;
    price: number;
    capacity: number;
    img: string;
    pdate: string;
}

const campus01: GalleryType = {
    num: 1,
    ptitle: "스터디룸",
    pcont: "스터디룸 : 팀플하기 좋은 교내 스터디룸",
    price: 20000,
    capacity: 10,
    img: "images/studyroom01.jpg",
    pdate: "2026-03-13"
};

const campus02: GalleryType = {
    num: 2,
    ptitle: "컴퓨터 실습실",
    pcont: "컴퓨터 실습실 : 보유 장비 갖춰진 컴퓨터 랩실",
    price: 30000,
    capacity: 30,
    img: "images/lap02.jpg",
    pdate: "2026-01-15"
};

const campus03: GalleryType = {
    num: 3,
    ptitle: "잔디밭 캠퍼스",
    pcont: "잔디밭 캠퍼스 : 잔디밭 위 캠퍼스 로망 이루세요",
    price: 10000,
    capacity: 30,
    img: "images/campus03.jpg",
    pdate: "2026-05-28"
};

const GalleryList: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    const [gallery, setGallery] = useState<GalleryType[]>([campus01, campus02, campus03]);
    

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>캠퍼스 시설 및 강의실 예약</h1>
            <ul className="prod-list">
                {gallery.map((e, i) => (
                    <li key={e.num}> 
                        <img src={e.img} alt={e.ptitle} />
                        <div className="caption">
                            <h2>{e.ptitle}</h2>
                            <p>{e.pcont}</p>
                            <p>대여가격: {e.price}원</p>
                            <p>수용인원: {e.capacity}명</p>
                            <p>반납일: {e.pdate}</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button
                                    onClick={handleOpenModal}
                                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
                                >
                                    예약하기
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <ReservationModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default GalleryList;