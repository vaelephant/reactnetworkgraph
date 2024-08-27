// components/NetworkGraph.tsx
import React, { useRef, useEffect } from 'react';
import { Network, Options } from 'vis-network/standalone'; // 确保使用正确的导入路径
import { DataSet } from 'vis-data';
import { edges, nodes } from '../../data/data';

const NetworkGraph: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const options: Options = {
    nodes: {
      shape: 'dot',
      scaling: {
        min: 10,
        max: 30,
        label: {
          min: 8,
          max: 30,
          drawThreshold: 12,
          maxVisible: 20,
        },
      },
      font: {
        size: 12,
        face: 'Tahoma',
      },
    },
    edges: {
      width: 0.15,
      color: { inherit: 'from' },
      smooth: {
        type: 'continuous',
      },
    },
    physics: false,
    interaction: {
      navigationButtons: true,
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
      hideEdgesOnZoom: true,
    },
    height: '100%', // 使用百分比高度
  };

  useEffect(() => {
    if (containerRef.current) {
      const data = {
        nodes: new DataSet(nodes),
        edges: new DataSet(edges),
      };

      // 检查容器是否为 null
      if (containerRef.current) {
        // 创建网络图实例
        const network = new Network(containerRef.current, data, options);
      } else {
        console.error('Network container not found!');
      }
    } else {
      console.error('Container reference is null');
    }
  }, [nodes, edges]);

  return (
    <div ref={containerRef} className="w-full h-screen" />
  );
};

export default NetworkGraph;