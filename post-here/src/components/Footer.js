import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.h4`
    color: white; 
    background-color: black;
    margin-bottom: 0;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const Footer = () => {
    return (
        <FooterStyle>Lambda Team</FooterStyle>
    )
}