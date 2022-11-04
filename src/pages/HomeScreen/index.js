import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../components/Header';
import { Container, ProductPaginationArea, ProductPaginationItem, FirstLine, Coins } from './styled';
import api from '../../api';
import Coin from '../../components/Coin';
import './index.css'


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


    useEffect(() => {
        const getAllCoins = async () => {
            setIsLoading(true);
            const coin = await api.getAllCoins();
            //console.log(coin)
            setAllCoins(coin);
            setCoins(coin)

        }
        getAllCoins();
        setIsLoading(false);
    }, []);

    useEffect(() => {
        //setCoins(allCoins);
        getCoins()
    }, [activePage, activeSearch]);

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            setActiveSearch(headerSearch);
        }, 2000);
    }, [headerSearch]);

    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    return (
        <Container>

            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {isLoading && <h1>Data Loading...</h1>}
            {coins.length > 0 &&
                <Coins>
                    <FirstLine>
                    <div className="coins">
                        <div className="coinImg"> </div>
                        <div className="coinLines"> Name </div>
                        <div className="coinLines">  </div>
                        <div className="coinPrice"> Price </div>
                        <div className="coinPercent"> 1h </div>
                        <div className="coinPercent"> 24h </div>
                        <div className="coinPercent"> 7d </div>
                    </div>
                    </FirstLine>
                    {coins.map(
                        (coins, index) => {
                            return (
                                <Coin id={index+1}
                                    chave={index}
                                    icon={coins.image}
                                    coinName={coins.name}
                                    coinSymbol={coins.symbol}
                                    price={coins.current_price}
                                    price_change_1h={coins.price_change_percentage_1h_in_currency.toFixed(2)}
                                    price_change_24h={coins.price_change_percentage_24h_in_currency.toFixed(2)}
                                    price_change_7d={coins.price_change_percentage_7d_in_currency.toFixed(2)}
                                />
                            )
                        })
                    }
                </Coins>
            }
            <div>
                {totalPages > 0 &&
                    <ProductPaginationArea>
                        {Array(totalPages).fill(0).map((item, index) => (
                            <ProductPaginationItem
                                key={index}
                                active={activePage}
                                current={index + 1}
                                onClick={() => setActivePage(index + 1)}
                            >
                                {index + 1}
                            </ProductPaginationItem>
                        ))}
                    </ProductPaginationArea>
                }
            </div>
        </Container>
    );
}