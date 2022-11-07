import React from "react";

export default function Text() {
  return (
    <div className="text-center pb-12">
      <img src="public\images\bg-intro-mobile.png" alt="" className="absolute z-0 -translate-y-32 -translate-x-6 opacity-70"/>
      <h1 className=" text-white text-3xl font-bold pb-10 relative z-10">Learn to code by watching others</h1>
      <p className="text-white relative z-10">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}