import React from 'react';

export const CharacterList = (props) => {
    let characters = [];
    for (const char in props.characters) {
        characters.push(char);
    }
    return (
        <div id='character-list'>
            <div id='character-list-msg'>Character List: </div>
            {characters.map(char => {
                return (
                    <div key={char} className='charList-item'>
                        <img className='character-list-img' src={require(`./images/${char}.jpg`)} alt={char} />
                        {char}
                    </div>
                )
            })}
        </div> 
    )
}