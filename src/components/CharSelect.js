import React from 'react';

export const CharSelect = (props) => {
    console.log(props.location);
    if (props.showMenu === false) return
    else if (props.showMenu === true) {
        const menuStyle = {
            position: 'absolute',
            top: `${(props.location[1])}px`,
            left: `${props.location[0]}px`,
        }

        const charClick = () => {
            
        }

        return (
            <div style={menuStyle} className='char-select'>
                <div onClick={() => props.handleMenu(props.coords[0], props.coords[1])} className='char'>Waldo</div>
                <div className='char'>Wizard</div>
                <div className='char'>Odlaw</div>
            </div>
        )
    }
}