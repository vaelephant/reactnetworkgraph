// components/NetworkGraph.tsx
import React, { useRef, useEffect } from 'react';
import { Network, Options } from 'vis-network';
import { DataSet } from 'vis-data';

const NetworkGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 设置默认的节点和边
  const nodes = [
    { id: 1, label: 'Node 1', color: 'red', shape: 'circle' },
    { id: 2, label: 'Node 2', color: 'blue', shape: 'box' },
    { id: 3, label: 'Node 3', color: 'green', shape: 'ellipse' },
    { id: 4, label: 'Node 4', color: 'red', shape: 'diamond' },
    { id: 5, label: 'Node 5' },
  ];

  const edges = [
    { from: 1, to: 2, label: 'Edge 1' },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ];

  // 设置默认的选项
  const options: Options = {
    edges: {
      color: 'red',
    },
    physics: {
      enabled: true,
    },
    interaction: {
      hover: true,
    },
    height: '900px',
  };

  useEffect(() => {
    if (containerRef.current) {
      const data = {
        nodes: new DataSet(nodes),
        edges: new DataSet(edges),
      };

      new Network(containerRef.current, data, options);
    }
  }, []);

  return <div ref={containerRef} style={{ height: '500px' }} />;
};

export default NetworkGraph;