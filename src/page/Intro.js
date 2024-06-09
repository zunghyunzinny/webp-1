import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Intro = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const introWrapper = document.getElementById("intro-wrapper");
      const scrollPosition = window.pageYOffset;
      introWrapper.style.transform = `translateY(${scrollPosition * 0.1}px)`;

      const gaps = document.querySelectorAll(".gap");
      gaps.forEach((gap) => {
        gap.style.height = `${2 + scrollPosition * 0.1}px`; // adjust multiplier for desired effect
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.1, // Adjust this value based on when you want the animation to trigger
      }
    );

    const elements = contentRef.current.querySelectorAll(".a1");
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
    <IntroWrapper id="intro-wrapper">
      <div className="content" ref={contentRef}>
        <div className="a1">
          소프트웨어학과는 Computer Science 분야의 기반 지식을 바탕으로 기업에서 요구하는 IT 기술을 배양하고 창의적이고 복합적 문제해결능력을 갖춘 미래형 소프트웨어 인재를 양성하기 위해 설립되었습니다.
          <div className="gap" />
          본 학과의 교육과정에서는 이산수학, 전산수학, 컴퓨터구조, 운영체제, 자료구조, 알고리즘, 데이터베이스, 컴퓨터네트워크 등의 기반 지식을 습득하고, 프로그래밍 실습 교육과 프로젝트 수행 교육 등을 통해 소프트웨어 설계 및 구현 능력을 배양하며, 4차 산업혁명에 준비된 인재 양성을 위해 머신러닝(machine learning), 인공지능 및 병렬 컴퓨팅 교육 등을 실시합니다.
          <div className="gap" />
          본 학과 졸업생들은 웹 및 앱 개발자, 게임 개발자, 서버/네트워크/데이터베이스/보안 관리자, 전산직 공무원, 프리랜서 프로그래머 등으로 활동할 수 있으며, IT 분야 대기업, 중견 및 중소 업체와 금융권 및 일반 기업체 IT 부서, 전산학 관련 국내외 대학원 등으로도 진출할 수 있습니다.
        </div>
        <div className="gap last-gap" />
      </div>
    </IntroWrapper>
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

const IntroWrapper = styled.div`
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
    line-height: 40px;
    color: #262626;
    max-width: 800px;
    margin: 0 auto;
  }

  .a1 {
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s, transform 0.6s;
    margin-top: -280px;
    border: 1px solid #262626;
    border-radius: 50px;
    padding: 50px;
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
`;

export default Intro;
