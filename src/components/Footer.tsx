import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  return (
    <AntFooter style={{ textAlign: 'center', backgroundColor: '#001529', color: 'white' }}>
      <p>© 2024 My App Footer with Ant Design</p>
    </AntFooter>
  );
};

export default Footer;
