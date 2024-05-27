// src/components/NodesPanel.jsx
import React from 'react';

const NodesPanel = ({ onAddNode }) => {
  return (
    <div className="nodes-panel">
      <button onClick={() => onAddNode('textNode')}>Add Text Node</button>
    </div>
  );
};

export default NodesPanel;
