import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const Stair = (props) => {
  const currPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.2,
    });
  }, [currPath]);

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-10 top-0">
        <div className="h-full w-full flex fixed z-10 top-0">
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
          <div className="stair h-full w-1/7 bg-black"> </div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
};

export default Stair;
