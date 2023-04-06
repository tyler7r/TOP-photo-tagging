import React from 'react';

export const CharSelect = (props) => {
    if (props.showMenu === false) return
    else if (props.showMenu === true) {
        const menuStyle = {
            position: 'absolute',
            top: `${props.coords[1]}px`,
            left: `${props.coords[0]}px`,
        }

        const charClick = () => {
            
        }

        return (
            <div style={menuStyle} className='char-select'>
                <div className='char'>Waldo</div>
                <div className='char'>Wizard</div>
                <div className='char'>Odlaw</div>
            </div>
        )
    }
}