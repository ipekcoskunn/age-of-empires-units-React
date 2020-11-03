import React from 'react';

const SessionContext = React.createContext({
    isAuthenticated: false,
    setAuthenticated:(authenticated) => {},

    ucase: [], //unit list
    setUcase:(newCase) => {},

});

export default SessionContext;