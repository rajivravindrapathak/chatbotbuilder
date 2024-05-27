// src/components/FlowBuilder.jsx
import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  removeElements,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';
import NodesPanel from '../components/NodesPanel';
import SettingsPanel from '../components/SettingsPanel';
import TextNode from '../components/TextNode';


const nodeTypes = {
  textNode: TextNode,
};

const FlowBuilder = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
  const onElementsRemove = useCallback(
    (elementsToRemove) => {
      setNodes((nds) => removeElements(elementsToRemove, nds));
      setEdges((eds) => removeElements(elementsToRemove, eds));
    },
    [setNodes, setEdges]
  );

  const onAddNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type,
      position: { x: 250, y: 0 },
      data: { text: 'New Node' },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const onChangeNodeText = (id, text) => {
    setNodes((nds) => 
      nds.map((node) => 
        node.id === id ? { ...node, data: { ...node.data, text } } : node
      )
    );
  };

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const saveFlow = () => {
    // Save logic here
  };

  return (
    <div className="flow-builder">
      <NodesPanel onAddNode={onAddNode} />
      {selectedNode && <SettingsPanel selectedNode={selectedNode} onChangeNodeText={onChangeNodeText} />}
      <ReactFlow
        nodes={nodes}   
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <button onClick={saveFlow}>Save Flow</button>
    </div>
  );
};

export default FlowBuilder;
