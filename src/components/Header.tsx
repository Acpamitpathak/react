import React from 'react';
import { Layout, Avatar, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader style={headerStyles}>
      <div style={containerStyles}>
        <Text style={appNameStyles}>My App</Text>
        <div style={profileContainerStyles}>
          <Avatar
            size={48}
            src="https://randomuser.me/api/portraits/men/75.jpg"
            icon={<UserOutlined />}
          />
          <div style={userInfoStyles}>
            <Text style={usernameStyles}>John Doe</Text>
            <Text style={emailStyles}>john.doe@example.com</Text>
          </div>
        </div>
      </div>
    </AntHeader>
  );
};

const headerStyles: React.CSSProperties = {
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Adds subtle shadow for separation
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
};

const profileContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const userInfoStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px', // Spacing between the avatar and user info
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
