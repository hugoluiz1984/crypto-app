import styled from 'styled-components';

export const CoinPercent = styled.div`
    display:flex;
    color: ${props=>props.price_change >= 0 ? 'green': 'red'};
    align-items:center;
    justify-content: flex-end;
    width:100px;
    

`;