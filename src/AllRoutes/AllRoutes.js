import React, { useState } from 'react';
// import FlowBuilder from './components/FlowBuilder';
// import NodesPanel from './components/NodesPanel';
// import SettingsPanel from './components/SettingsPanel';
import FlowBuilder from '../components/FlowBuilder';

const AllRoutes = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    return (
        <>
            {/* <div className="sidebar">
                <NodesPanel />
            </div>
            <div className="main">
                <FlowBuilder setSelectedNode={setSelectedNode} />
            </div>
            <div className="settings">
                {selectedNode && <SettingsPanel selectedNode={selectedNode} />}
            </div> */}
            <FlowBuilder />
        </>
    );
}

export default AllRoutes;
