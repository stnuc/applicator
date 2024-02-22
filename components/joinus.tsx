"use client";

import anime from "animejs";
import { useEffect, useMemo, useRef, useState } from "react";
import "@/styles/joinus.sass";

export function JoinUs() {
  const [played, setPlayed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollC);
    return () => window.removeEventListener("scroll", scrollC);
  }, []);

  const scrollC = () => {
    if (inputRef.current == null) {
      return;
    }
    const elem = inputRef.current!.getBoundingClientRect();

    if (elem.y > 0) return;
    if (played) return;
    setPlayed(true);
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
  };
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
              location.href = "https://forms.gle/J2gN8EsjsSERLRYT9";
            }}
          >
            신청하기
          </p>
        </div>
      </section>
    </>
  );
}
