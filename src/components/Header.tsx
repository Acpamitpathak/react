import React from 'react';
import { Layout, Avatar, Typography, Space, Tooltip } from 'antd';
import { UserOutlined, BellOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <AntHeader style={headerStyles}>
      <div style={containerStyles}>
        <div style={logoContainerStyles}>
          <img src="https://worldvectorlogo.com/logo/ubs-logo-svg" alt="UBS Logo" style={logoStyles} />
        </div>
        <Text style={appNameStyles}>My App</Text>
        <div style={profileContainerStyles}>
          <Space style={iconContainerStyles}>
            <Tooltip title="Search">
              <SearchOutlined style={iconStyles} />
            </Tooltip>
            <Tooltip title="Notifications">
              <BellOutlined style={iconStyles} />
            </Tooltip>
            <Tooltip title="Settings">
              <SettingOutlined style={iconStyles} />
            </Tooltip>
          </Space>
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
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Shadow for separation
  borderBottom: '1px solid #e8e8e8', // Light border for separation
};

const containerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px', // Space between logo and app name
};

const logoStyles: React.CSSProperties = {
  height: '32px', // Adjust the size as needed
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

const iconContainerStyles: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px', // Space between icons
  marginRight: '20px', // Space between icons and avatar
};

const iconStyles: React.CSSProperties = {
  fontSize: '18px',
  color: '#333', // Icon color
  cursor: 'pointer',
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
