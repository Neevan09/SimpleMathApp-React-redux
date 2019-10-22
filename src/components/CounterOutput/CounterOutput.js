import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Counter: {props.value}
    </div>
);

export default counterOutput;