// src/components/LeftPanel.tsx
import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Styled components
const TabButton = styled.div<{ active: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#ddd' : '#f4f4f4')};
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
`;

const TabContent = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 0 0 4px 4px;
`;

interface LeftPanelProps {
  activeTab: 'details' | 'editor';
  setActiveTab: (tab: 'details' | 'editor') => void;
  setEmailContent: (content: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ activeTab, setActiveTab, setEmailContent }) => {
  const handleEditorChange = (content: string) => {
    setEmailContent(content);
  };

  return (
    <>
      <TabButton active={activeTab === 'details'} onClick={() => setActiveTab('details')}>
        Details
      </TabButton>
      <TabButton active={activeTab === 'editor'} onClick={() => setActiveTab('editor')}>
        Editor
      </TabButton>
      <TabContent>
        {activeTab === 'details' && (
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <div>Some list here</div>
            <input type="radio" name="option" /> Option 1
            <input type="radio" name="option" /> Option 2
          </div>
        )}
        {activeTab === 'editor' && (
          <ReactQuill theme="snow" onChange={handleEditorChange} />
        )}
      </TabContent>
    </>
  );
};

export default LeftPanel;
