import React from 'react';

const charComponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        border: '1px solid black',
        margin: '16px',
        textAlign: 'center'
      };

    
    return (
        <button
          style={style}
          onClick={props.click}>
          {props.char}
        </button>
    
    );
};

export default charComponent;