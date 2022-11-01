import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container, Titulo } from './styled';
import api from '../../api';
import Coin from '../../components/Coin';


let searchTimer = null;

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [totalPages, setTotalPages] = useState(0);
    const [allCoins, setAllCoins] = useState([]);
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

    const getCoins = () => {
        const coin = allCoins.filter((coin) =>
        coin.name.toLowerCase().includes(activeSearch.toLowerCase()))
        setCoins(coin)
    }
    

    useEffect(()=>{
        const getAllCoins = async () => {
            setIsLoading(true);
            const coin = await api.getAllCoins();
            //console.log(coin)
            setAllCoins(coin);
            setCoins(coin)
            /*if(coins.error === '') {
                setCoins(coin);
            }*/
            //ReactTooltip.rebuild();
        }
        getAllCoins();
        setIsLoading(false);
    },[]);

    useEffect(()=>{
        //setCoins(allCoins);
        getCoins()
    },[activePage, activeSearch]);

    useEffect(()=>{
        clearTimeout(searchTimer);
        searchTimer = setTimeout(()=>{
                setActiveSearch(headerSearch);
        }, 2000);
    },[headerSearch]);

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>
            
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
            {isLoading && <h1>Data Loading...</h1>}
            {coins.length > 0 && 
                <div>
                    {coins.map(
                        (coins, index) => {
                            return (
                                <Coin id={index} icon={coins.image} coinName={coins.name} coinSymbol={coins.symbol} price={coins.current_price}/>
                            )
                        })
                    }
                </div>
            }
        </Container>
    );
}