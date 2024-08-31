// src/components/Body.tsx
import React, { useState } from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import ResizablePanel from './ResizablePanel';

const Body: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'details' | 'editor'>('details');
  const [leftWidth, setLeftWidth] = useState<number>(300);
  const template = "<p>Hello [Name],</p><p>This is your email template.</p>";
  const formData = { name: "John Doe", email: "john.doe@example.com" };

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
      <ResizablePanel
        width={leftWidth}
        minWidth={200}
        maxWidth={600}
        onResize={(e, { size }) => setLeftWidth(size.width)}
      >
        <LeftPanel 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setEmailContent={() => {}} // Placeholder function if needed
        />
      </ResizablePanel>
      <ResizablePanel
        width={Number(`calc(100% - ${leftWidth}px - 1px)`)} // Convert to number if needed
        minWidth={200}
        maxWidth={600}
      >
        <RightPanel template={template} formData={formData} />
      </ResizablePanel>
    </div>
  );
};

export default Body;
