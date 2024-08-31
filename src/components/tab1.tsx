import React from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
//npm install @mui/material @emotion/react @emotion/styled


const LeftPage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="tabs">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
      </Tabs>
      <Box sx={{ padding: 2 }}>
        {value === 0 && (
          <Typography variant="body1">
            {/* Content for Tab 1 */}
            <p>Details for Tab 1</p>
            {/* You can add more complex components here */}
          </Typography>
        )}
        {value === 1 && (
          <Typography variant="body1">
            {/* Content for Tab 2 */}
            <p>Details for Tab 2</p>
            {/* You can add more complex components here */}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default LeftPage;
