// pages/index.tsx
"use client"
import React from 'react';
import NetworkGraph from './components/NetworkGraph';

const IndexPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-screen text-center bg-black">
      <h1 className="text-2xl md:text-3xl  mb-8 mt-12 text-white">
        Artificial Intelligence Data Mining Driven by Medical Data
        <br />
        基于医疗数据驱动的人工智能数据挖掘
      </h1>
      {/* 设置 NetworkGraph 的宽度和高度为全屏 */}
      <div className="flex-grow w-full h-full">
        <NetworkGraph />
      </div>
    </div>
  );
};

export default IndexPage;