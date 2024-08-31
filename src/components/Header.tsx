// src/components/Header.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f4f4;
  border-bottom: 1px solid #ccc;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 10px;
`;

const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Header: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{ username: string; photo: string } | null>(null);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    const fetchData = async () => {
      const response = await fetch('/data.json'); // Ensure you have a `data.json` in `public` folder
      const data = await response.json();
      setName(data.name);
      setUser(data.user);
    };
    fetchData();
  }, []);

  return (
    <HeaderWrapper>
      <div>{name}</div>
      <Profile>
        {user && (
          <>
            <ProfilePicture src={user.photo} alt="Profile" />
            <UserName>{user.username}</UserName>
          </>
        )}
      </Profile>
    </HeaderWrapper>
  );
};

export default Header;
