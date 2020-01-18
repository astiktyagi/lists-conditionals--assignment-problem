import React from 'react';

const validationComponent = (props) => {

    const MIN_LEN = 5;
    let validationText = null;

    if (props.textLength > MIN_LEN){
        validationText = <p> Text Long Enough!</p>
    } else {
        validationText = <p> Text too Short!</p>
    }
    return validationText
};

export default validationComponent;