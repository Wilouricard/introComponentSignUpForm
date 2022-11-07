import React from "react";

export default function Text() {
  return (
    <div className="text-center pb-12">
      <img src="public\images\bg-intro-mobile.png" alt="" className="absolute z-0 -translate-y-32 -translate-x-6 opacity-70 md:hidden"/>
      <img src="public\images\bg-intro-desktop.png" alt="" className="md:absolute z-0 md:opacity-70 hidden md:inline md:-translate-y-10 md:-translate-x-[330px]"/>
      <h1 className=" text-white text-3xl font-bold pb-10 relative z-10 md:text-5xl md:pr-20 md:pl-32 md:flex md:pt-44 md:text-start">Learn to code by watching others</h1>
      <p className="text-white relative z-10 md:text-start md:pl-32 md:pr-20">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}