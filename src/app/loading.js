'use client'
import React from "react";
import  RingLoader  from "react-spinners/RingLoader";

const Loading = () => {
  return (
    <div className="loading">
      <RingLoader color="#53a8c9" loading={true} />
    </div>
  );
};

export default Loading;
