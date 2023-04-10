import React from 'react';
import '../components/styles/char-select.css'

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
                <div onClick={() => {props.handleMenu('Waldo', props.coords[0], props.coords[1])}} id='menuWaldo' className='char'>WALDO</div>
                <div className='char-select-divider'> </div>
                <div onClick={() => {props.handleMenu('Wizard', props.coords[0], props.coords[1])}} id='menuWizard' className='char'>WIZARD</div>
                <div className='char-select-divider'> </div>
                <div onClick={() => {props.handleMenu('Odlaw', props.coords[0], props.coords[1])}} id='menuOdlaw' className='char'>ODLAW</div>
            </div>
        )
    }
}