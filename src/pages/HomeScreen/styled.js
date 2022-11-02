import styled from 'styled-components';

export const Container = styled.div``;

export const Titulo = styled.h1``;

export const ProductPaginationArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;
export const ProductPaginationItem = styled.div`
    background-color: ${props=>props.active=== props.current ? '#BBB': '#FFFFFF'};
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;
`;
export const FirstLine = styled.div`
    font-weight: bold;
`;
export const Coins = styled.div`
    margin-top: 20px;
    
`;
