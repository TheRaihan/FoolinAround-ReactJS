import React from 'react';

const mountain = (props) => {
    return <p> {props.name} {props.height}m {props.children}</p>
};

export default mountain;