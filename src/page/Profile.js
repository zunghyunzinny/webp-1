import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

import image01 from '../img/001.png';
import image02 from '../img/002.png';
import image03 from '../img/003.png';
import image04 from '../img/004.png';
import image05 from '../img/005.png';

const Profile = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const elements = contentRef.current.querySelectorAll('.a1');
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <ProfileBlock id="profile-wrapper">
            <div className="content" ref={contentRef}>
                <div className="a1">
                    <div className="profile-section">
                        <img className="image" src={image01} alt="이미지1" />
                        <div className="text-container">
                            <h4>양태천<span> 교수</span></h4>
                            <div className="line" />
                            <p>
                                <p1>세부전공</p1> 알고리즘, 컴퓨터그래픽스<br />
                                <p1>최종학력</p1> KAIST 전산학과(박사)<br />
                                <p1>e-mail</p1> tcyang@ks.ac.kr<br />
                                <p1>phone</p1> 051-663-5141
                            </p>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="gap" />
                    <div className="profile-section">
                        <img className="image" src={image02} alt="이미지2" />
                        <div className="text-container">
                            <h4>성낙운<span> 교수</span></h4>
                            <div className="line" />
                            <p>
                                <p1>세부전공</p1> 운영체제<br />
                                <p1>최종학력</p1> KAIST 전산학 (박사)<br />
                                <p1>e-mail</p1> nuseing@ks.ac.kr<br />
                                <p1>phone</p1> 051-663-5142
                            </p>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="profile-section">
                        <img className="image" src={image03} alt="이미지3" />
                        <div className="text-container">
                            <h4>홍석희<span> 교수</span></h4>
                            <div className="line" />
                            <p>
                                <p1>세부전공</p1> 데이터베이스, 실시간 시스템 등<br />
                                <p1>최종학력</p1> KAIST 전산학과 졸업 (박사)<br />
                                <p1>e-mail</p1> shong@ks.ac.kr<br />
                                <p1>phone</p1> 051-663-5145
                            </p>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="profile-section">
                        <img className="image" src={image04} alt="이미지4" />
                        <div className="text-container">
                            <h4>지상문<span> 교수</span></h4>
                            <div className="line" />
                            <p>
                                <p1>세부전공</p1> deep learning, bioinformarics<br />
                                <p1>최종학력</p1> KAIST 박사<br />
                                <p1>e-mail</p1> smchiks@ks.ac.kr<br />
                                <p1>phone</p1> 051-663-5146
                            </p>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="profile-section">
                        <img className="image" src={image05} alt="이미지5" />
                        <div className="text-container">
                            <h4>강인수<span> 부교수</span></h4>
                            <div className="line" />
                            <p>
                                <p1>세부전공</p1> 자연어처리, 정보검색, 시맨틱웹<br />
                                <p1>최종학력</p1> 포항공과대학교 박사<br />
                                <p1>e-mail</p1> dbaisk@ks.ac.kr<br />
                                <p1>phone</p1> 051-663-5147
                            </p>
                        </div>
                    </div>
                </div>
                <div className="gap last-gap" />
            </div>
        </ProfileBlock>
    );
};

const slideIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(20px);
    opacity: 1;
  }
`;

const ProfileBlock = styled.div`
    text-align: center;
    padding: 50px;
    padding-bottom: 300px;
    transform: translateY(100px);
    animation: ${slideIn} 1s ease-out;
    position: relative;

    .content {
        font-family: "004.ttf";
        font-size: 14.5px;
        letter-spacing: -0.5px;
        line-height: 20px;
        color: #262626;
        max-width: 800px;
        margin: 0 auto;
    }

    .a1 {
        display: block;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s, transform 0.6s;
        border: 1px solid #262626;
        border-radius: 50px;
        padding: 50px;
        margin-top: -280px;
    }

    .a1.animate {
        opacity: 1;
        transform: translateY(0);
    }

    .gap {
        height: 0px;
        transition: height 0.6s;
    }

    .last-gap {
        height: 50px;
    }

    .profile-section {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 20px;
        position: relative;
    }

    .image {
        width: 20%;
        border: 1px solid #262626;
        border-radius: 10px;
        margin-right: 50px;
        margin-left: 100px;
    }

    .text-container {
        flex: 1;
        text-align: left;
        font-size: 12px;
        font-family: "006.ttf";
    }

    h4 {
        font-size: 20px;
        color: #262626;
        white-space: nowrap;
        font-family: "006.ttf";

        span {
            font-size: 13px;
            font-family: "005.ttf";
        }
    }

    p {
        margin-top: -20px;
        font-size: 12px;
        font-family: "006.ttf";

        p1 {
            font-family: "003.ttf";
            font-size: 13px;
        }
    }

    .line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 80%;
        width: 8px;
        height: 106px;
        margin-top: 46px;
        background-color: #262626;
    }

    .divider {
        width: 100%;
        height: 1px;
        background-color: #262626;
        margin: 40px 0;
        
    }
`;

export default Profile;
