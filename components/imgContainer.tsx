"use client";

import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export function FixedImageBaseline({
  setIndex,
  setMax,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<boolean>>;
}) {
  const { height } = useWindowDimensions();
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    window.addEventListener("scroll", compute);
    return () => window.removeEventListener("scroll", compute);
  }, []);
  const compute = () => {
    if (inputRef.current == null) {
      return;
    }
    const elem = inputRef.current!.getBoundingClientRect();
    if (elem.y > height) {
      setIndex(0);
    }
    if (elem.y < -2 * height) {
      setIndex(59);
    }
    const index = Math.ceil(((height - elem.y) / height) * 20);
    setIndex(index);
    setMax(index <= 28);
  };
  if (!mounted) {
    return <></>;
  }
  return <div className="fix-image-baseline" ref={inputRef}></div>;
}

export function FixedImageAnimation({ index }: { index: number }) {
  let imgs = useMemo(() => {
    let temp = [];
    for (let i = 1; i < 60; i++) {
      temp.push({
        front: `/fluid-front/${i.toString().padStart(4, "0")}.png`,
        back: `/fluid-back/${i.toString().padStart(4, "0")}.png`,
      });
    }
    return temp;
  }, []);
  return (
    <>
      {imgs.map((value, i) => {
        let opacity = 1;
        if (i != index) {
          opacity = 0;
        }
        let fzi = 9999;
        if (index > 53) {
          fzi = 0;
        }
        return (
          <>
            <div
              key={`b${i}`}
              style={{
                opacity: opacity,
                position: "fixed",
                bottom: 0,
                left: 0,
                zIndex: fzi,
                width: "100vw",
                height: "100vh",
              }}
            >
              <Image
                fill={true}
                src={value.front}
                alt=""
                style={{ zIndex: fzi }}
              ></Image>
            </div>
            <div
              key={`f${i}`}
              style={{
                opacity: opacity,
                position: "fixed",
                bottom: 0,
                left: 0,
                zIndex: -99999,
                width: "100vw",
                height: "100vh",
              }}
            >
              <Image
                fill={true}
                src={value.back}
                alt=""
                style={{ zIndex: -99999 }}
              ></Image>
            </div>
          </>
        );
      })}
    </>
  );
}

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
}
