// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const FooterWrapper = styled.footer`
  padding: 10px;
  text-align: center;
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </FooterWrapper>
  );
};

export default Footer;
