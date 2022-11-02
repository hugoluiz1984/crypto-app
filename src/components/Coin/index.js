import React from 'react'
//import { useHistory } from "react-router-dom";
import "./Coin.css";

const Coin = (
    {icon,
    coinName,
    coinSymbol,
    price,
    id,}
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
                </div>
            </div>
        </div>
    )
}

export default Coin