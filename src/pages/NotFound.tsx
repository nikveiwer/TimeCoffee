import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const NotFound: React.FC = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Could not found — <strong>404</strong>
        </Alert>
    );
};

export default NotFound;
