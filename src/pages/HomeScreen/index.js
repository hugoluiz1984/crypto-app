import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container, Titulo } from './styled';
import api from '../../api';

let searchTimer = null;

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [coins, setCoins] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [activeSearch, setActiveSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    /*const getAllCoins = async ()=> {
        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        if(prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }

    }*/

    useEffect(()=>{
        const getAllCoins = async () => {
            setIsLoading(true);
            const coin = await api.getAllCoins();
            //console.log(coin)
            setCoins(coin);
            /*if(coins.error === '') {
                setCoins(coin);
            }*/
            //ReactTooltip.rebuild();
        }
        getAllCoins();
        setIsLoading(false);
    },[]);

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            <Titulo>Homepage</Titulo>
            <button onClick={handleButtonClick}>Ir para Tela 2</button>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
            {isLoading && <h1 className="loadingMssg">Data Loading...</h1>}
            {coins.length > 0 && 
                <div>
                    {console.log(coins)}
                </div>

            }
        </Container>
    );
}