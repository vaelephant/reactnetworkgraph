// components/WorldCup.tsx
import React from 'react';
import Graph from 'react-vis-network-graph';
import { edges, nodes, Node, Edge } from './data';

export default function WorldCup() {
  // 定义 options 的类型
  const options: any = {
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
    height: '900px',
  };

  // 定义数据的类型
  const data: { nodes: Node[]; edges: Edge[] } = { nodes: nodes, edges: edges };

  return (
    <div className='container'>
      <Graph graph={data} options={options} />
    </div>
  );
}