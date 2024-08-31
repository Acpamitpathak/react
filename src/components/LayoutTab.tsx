// src/components/LayoutTab.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

interface LayoutTabProps {
  onChange: (template: string) => void;
}

const LayoutTab: React.FC<LayoutTabProps> = ({ onChange }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('Hello, [Name]');

  const handleTemplateChange = (content: string) => {
    setSelectedTemplate(content);
    onChange(content);
  };

  return (
    <div>
      <select
        onChange={(e) => {
          const selected = e.target.value;
          setSelectedTemplate(selected);
          onChange(selected);
        }}
        style={{ marginBottom: '10px' }}
      >
        <option value="Hello, [Name]">Template 1</option>
        <option value="Dear [Name], welcome">Template 2</option>
      </select>
      
      <ReactQuill
        value={selectedTemplate}
        onChange={handleTemplateChange}
        style={{ height: '200px' }}
        theme="snow"
      />
    </div>
  );
};

export default LayoutTab;
