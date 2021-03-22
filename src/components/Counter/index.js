import React from 'react';
const Counter = props => {
    const { name } = props;
    return React.createElement("p", null,
        name,
        " counter - tsx");
};
export default Counter;
