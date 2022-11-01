import React, { useState} from 'react'



const Header = ({ search, onSearch}) => {

    const [inputActive, setInputActive] = useState(search === '' ? false : true);
    
    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search === ''){
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <div>
            <div></div>
            <input 
            type='text' 
            placeholder='Digite um produto ...'
            value={search}
            active={inputActive}
            onChange={handleChange}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}
            />
        </div>
    )
}

export default Header