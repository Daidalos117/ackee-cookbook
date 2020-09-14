import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

interface Props {
  height?: string;
}

const Loading: React.FC<Props> = props => (
    <Box display="flex" alignItems="center" justifyContent="center" height='100vh' {...props}>
        <CircularProgress />
    </Box>
);

export default Loading;
