// src/components/SettingsPanel.jsx
import React from 'react';

const SettingsPanel = ({ selectedNode, onChangeNodeText }) => {
  return (
    <div className="settings-panel">
      <label>Text:</label>
      <input 
        type="text" 
        value={selectedNode.data.text} 
        onChange={(e) => onChangeNodeText(selectedNode.id, e.target.value)}
      />
    </div>
  );
};

export default SettingsPanel;
