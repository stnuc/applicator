"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "./card";
import { FixedImageAnimation, FixedImageBaseline } from "./imgContainer";
import "@/styles/introduce.sass";

export default function IntroducePage() {
  const [imgIndex, setImageIndex] = useState(0);
  const [beforeMax, setBeforeMax] = useState(true);
  return (
    <>
      <div className="introduce">
        <FixedImageAnimation index={imgIndex}></FixedImageAnimation>
        <div className="wave-card">
          {beforeMax ? (
            <Card
              title={"Explore\nWave of knowledge"}
              content={
                "Applicator는 다양한 지식을 공유하는 것을 목표로 하는 학술 동아리입니다\n각기 다른 분야를 공부하고, 서로 공유하여 지식의 범위를 넓히는데 집중하죠\n이러한 활동을 지원하기위해, 세미나와 프로젝트 발표회를 개최합니다"
              }
              direct={null}
            ></Card>
          ) : (
            <Card
              title={"Seminar"}
              content={
                "Applicator seminar는 자신의 지식을 공유하는 자리입니다\n온/오프라인 세미나를 통해, 지식을 공유/습득하세요\n주로 학부연구생이 참여합니다"
              }
              direct={{
                name: "Check our seminar",
                url: "https://stnuc.github.io/seminar/",
              }}
            ></Card>
          )}
        </div>
        <FixedImageBaseline
          setIndex={setImageIndex}
          setMax={setBeforeMax}
        ></FixedImageBaseline>
        <div style={{ height: "300vh" }}></div>
      </div>
    </>
  );
}
