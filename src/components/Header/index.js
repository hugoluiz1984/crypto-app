import React, { useState} from 'react';
import { Titulo } from '../../pages/HomeScreen/styled';
//import { useHistory } from "react-router-dom";
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch}) => {

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
        <Container>
            <Logo src="/assets/logo.png" />
            <Titulo>Gamma Crypto</Titulo>
            <SearchInput 
                type='text' 
                placeholder='Digite um produto ...'
                value={search}
                active={inputActive}
                onChange={handleChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
            />
        </Container>
    )
}