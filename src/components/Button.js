import styled from "styled-components";
import { Link } from "react-router-dom";
export const Button = styled(Link)`
white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center
    background-color: rgba(0,0,0,0.5)
    padding: ${({big})=>(big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#000' : '#000d1a')};
    font-size: ${({big}) => (big ? '20px' : '19px')};
    animation: smoothAppear 2s;
    &:hover {
        transform: translateY(-2px);
    }
`;