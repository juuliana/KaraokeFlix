import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover{
        color: black;
        background: var(--primary);
        box-shadow: 0 0 10px white, 0 0 40px white, 0 0 80px white;
        transition-delay: 4s;
    }
    
    &:focus {
        opacity: .5;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TableC = styled.tr`
    :hover{
        background-color: ${(props) => props.fieldColor || 'blue'};
    } 
`;