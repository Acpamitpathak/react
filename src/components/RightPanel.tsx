// src/components/RightPanel.tsx
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './RightPanel.css'; // Import the CSS file for additional styling

interface RightPanelProps {
  template: string;
  formData: { name?: string; email?: string };
}

const RightPanel: React.FC<RightPanelProps> = ({ template, formData }) => {
  const emailContent = template.replace('[Name]', formData.name || '');

  return (
    <div className="right-panel">
      <div className="email-preview">
        <h2>Email Preview</h2>
        <div className="email-header">
          <span className="email-from">From: {formData.email || 'noreply@example.com'}</span>
          <span className="email-subject">Subject: Welcome {formData.name || 'Customer'}</span>
        </div>
        <div className="email-content">
          <Editor
            apiKey="your-tinymce-api-key" // Replace with your TinyMCE API key
            value={emailContent}
            init={{
              height: 500,
              menubar: false,
              plugins: 'link image code',
              toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onChange={(e) => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
