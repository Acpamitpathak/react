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
  backgroundColor: '#001529',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
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
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const profileContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px', // CSS gap for spacing between avatar and user info
};

const userInfoStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '10px', // Margin between avatar and text
};

const usernameStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
};

const emailStyles: React.CSSProperties = {
  color: 'white',
  fontSize: '14px',
};

export default Header;
