"use client";

import anime from "animejs";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "@/styles/joinus.sass";

export function JoinUs() {
  const [played, setPlayed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollC = useCallback(() => {
    if (inputRef.current == null) {
      return;
    }
    const elem = inputRef.current!.getBoundingClientRect();

    if (elem.y > 0) return;
    if (played) return;
    console.log("asdfasf");
    anime({
      autoplay: true,
      targets: ".join .anime",
      translateY: 0,
      color: "#FFFFFF",
      duration: 400,
      delay: function (el, i) {
        const l = [0, 100, 300];
        return l[i];
      },
      easing: "easeInSine",
    });
    inputRef.current.scrollIntoView({ behavior: "instant" });
    setPlayed(true);
  }, [played]);
  useEffect(() => {
    window.addEventListener("scroll", scrollC);
    return () => window.removeEventListener("scroll", scrollC);
  }, [played, scrollC]);
  return (
    <>
      <div className="join-bar" ref={inputRef}></div>
      <section className="join">
        <div className="join-container">
          <p
            className="join-title anime"
            style={{ transform: "translateY(10px)", color: "#FFFFFF00" }}
          >
            Join us
          </p>
          <p
            className="join-subtitle anime"
            style={{ transform: "translateY(10px)", color: "#FFFFFF00" }}
          >
            준비 되셨나요? Applicator와 함께해요
          </p>
          <p
            className="join-apply anime"
            style={{
              transform: "translateY(10px)",
              color: "#FFFFFF00",
              cursor: "pointer",
            }}
            onClick={() => {
              location.href = "https://forms.gle/fcC2oYi4aMBvq2Fd8";
            }}
          >
            신청하기
          </p>
        </div>
      </section>
    </>
  );
}
