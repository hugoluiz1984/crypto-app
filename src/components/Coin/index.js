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
    price_change
}
) => {

    //let history = useHistory();

    return (
        <div key={id} className="Container">
            <div className="coinRow">
                <div className="coin">
                    <img src={icon}/>
                    <div className="coinLine"> {coinName} </div>
                    <div className="coinLine"> {coinSymbol} </div>
                    <div className="coinLine"> {price !=='Price' ? `$ ${price}`:` ${price}`} </div>
                    <CoinPercent price_change={price_change}> {price_change}% </CoinPercent>
                </div>
            </div>
        </div>
    )
}

export default Coin