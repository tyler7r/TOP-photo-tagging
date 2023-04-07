import React from 'react';

export const CharSelect = (props) => {
    if (props.showMenu === false) return
    else if (props.showMenu === true) {
        const menuStyle = {
            position: 'absolute',
            top: `${(props.location[1])}px`,
            left: `${props.location[0]}px`,
        }

        return (
            <div style={menuStyle} className='char-select'>
                <div onClick={() => {props.handleMenu('Waldo', props.coords[0], props.coords[1])}} id='menuWaldo' className='char'>Waldo</div>
                <div onClick={() => {props.handleMenu('Wizard', props.coords[0], props.coords[1])}} id='menuWizard' className='char'>Wizard</div>
                <div onClick={() => {props.handleMenu('Odlaw', props.coords[0], props.coords[1])}} id='menuOdlaw' className='char'>Odlaw</div>
            </div>
        )
    }
}