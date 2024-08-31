import React from 'react';

type BodyProps = {
  style?: React.CSSProperties;
};

const Body: React.FC<BodyProps> = ({ style }) => {
  return (
    <main style={style}>
      <p>This is the body of the app.</p>
    </main>
  );
};

export default Body;
