import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container, ProductPaginationArea, ProductPaginationItem} from './styled';
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
                    <Coin id={''} icon={'/assets/name.png'} coinName={'Name'} coinSymbol={''} price={'Price'}/>
                    {coins.map(
                        (coins, index) => {
                            return (
                                <Coin id={index} icon={coins.image} coinName={coins.name} coinSymbol={coins.symbol} price={coins.current_price}/>
                            )
                        })
                    }
                </div>
            }
            <div>
            {totalPages > 0 &&
                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item, index) => (
                        <ProductPaginationItem 
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={()=>setActivePage(index+1)}
                        >
                          {index +1}  
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
            }
            </div>
        </Container>
    );
}