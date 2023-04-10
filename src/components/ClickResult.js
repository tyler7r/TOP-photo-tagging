import React from 'react';

export const ClickResult = (props) => {
    const menuStyle = {
        position: 'absolute',
        top: `${(props.location[1])}px`,
        left: `${props.location[0]}px`,
    }

    setTimeout(() => {
        props.setClickResult('none');
    }, 3000)

    if (props.clickResult === 'none') return
    else if (props.clickResult === 'Wrong') {
        return (
            <div style={menuStyle} id='click-result'>
                No Characters Found
            </div>
        )
    } else {
        return (
            <div style={menuStyle} id='click-result'>
                You Found {props.clickResult}!
            </div>
        )
    }
}