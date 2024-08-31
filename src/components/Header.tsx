import React from 'react';
import { Layout, Avatar, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

//npm install @ant-design/icons


const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader style={headerStyles}>
      <div style={containerStyles}>
        <Text style={appNameStyles}>My App</Text>
        <Space style={profileContainerStyles}>
          <Avatar
            size={48}
            src="https://randomuser.me/api/portraits/men/75.jpg"
            icon={<UserOutlined />}
          />
          <div style={userInfoStyles}>
            <Text style={usernameStyles}>John Doe</Text>
            <Text style={emailStyles}>john.doe@example.com</Text>
          </div>
        </Space>
      </div>
    </AntHeader>
  );
};

const headerStyles: React.CSSProperties = {
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Enhanced shadow for more depth
  zIndex: 1, // Ensures the header stays above other content
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const appNameStyles: React.CSSProperties = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  marginLeft: '20px',
};

const profileContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginLeft: 'auto',
  marginRight: '20px',
};

const userInfoStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
};

const usernameStyles: React.CSSProperties = {
  color: '#333',
  fontSize: '16px',
  fontWeight: 'bold',
};

const emailStyles: React.CSSProperties = {
  color: '#555',
  fontSize: '14px',
};

export default Header;
