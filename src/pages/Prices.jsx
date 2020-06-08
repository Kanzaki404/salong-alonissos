import React from 'react'
import styled from 'styled-components';

const StyledPrices = styled.div `
padding: 50px;
h1{
    text-align:center;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 35px;
}
h2{
    font-weight: 100;
    text-align: center;
    margin-top: 50px;
}
div{
    display:flex;
    justify-content: space-between;
    border-bottom: dashed 2px;
    font-size: 20px;
    font-weight: lighter;
    font-family: 'Quicksand', sans-serif;

}
p{
    margin-top: 15px;
    margin-bottom: 15px;
}
`
export default function Prices() {
    return (
        <StyledPrices>
            <h1>Prices</h1>
            <h2>Cutting & Styling</h2>
            <div>
                <p>Full Head</p>
                <p>€10</p>
            </div>
            <div>
                <p>Half Head</p>
                <p>€10</p>
            </div>
            <h2>Color</h2>
            <div>
                <p>Gloss</p>
                <p>€10</p>
            </div>
            <div>
                <p>Single Process</p>
                <p>€10</p>
            </div>
            <h2>Manicure</h2>
            <div>
                <p>Sharpening</p>
                <p>€10</p>
            </div>
            <div>
                <p>Nail Painting</p>
                <p>€10</p>
            </div>
            <div>
                <p>Nail extensions</p>
                <p>€10</p>
            </div>
        </StyledPrices>
    )
}
