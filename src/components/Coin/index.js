import React from 'react'
//import { useHistory } from "react-router-dom";
import "./Coin.css";
import { CoinPercent } from './styled';


const Coin = (
    {icon,
    coinName,
    coinSymbol,
    price,
    id,
    price_change_1h,
    price_change_24h,
    price_change_7d,
    chave
}
) => {

    //let history = useHistory();

    return (
        <div  key={id} className="coinRow">
            <img src={icon} alt={coinName}/>
            <div className="coinLine"> {coinName} </div>
            <div className="coinLine"> {coinSymbol} </div>
            <div className="coinPrice"> {price<1 ? `$ ${price}`:` $${price.toFixed(2)}`} </div>
            <CoinPercent price_change={price_change_1h}> {price_change_1h}% </CoinPercent>
            <CoinPercent price_change={price_change_24h}> {price_change_24h}% </CoinPercent>
            <CoinPercent price_change={price_change_7d}> {price_change_7d}% </CoinPercent>
        </div>
    )
}

export default Coin