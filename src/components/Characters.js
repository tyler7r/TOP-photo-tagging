import React from 'react';

export const CharacterList = (props) => {
    if (props.remainingChars.length > 0) {
    return (
        <div id='character-list'>
            {props.remainingChars.map(char => {
                return (
                    <div key={char} className='character-list-item'>
                        <div className='character-list-name'>{char.toUpperCase()}</div>
                        <img className='character-list-img' src={require(`./images/${char}.jpg`)} alt={char} />
                    </div>
                )
            })}
        </div>
    )} else if (props.remainingChars.length === 0) {
        return (
        <div id='character-list'>
            <div id='empty-character-list-msg'>YOU WON!</div>
        </div>
        )
    }
}