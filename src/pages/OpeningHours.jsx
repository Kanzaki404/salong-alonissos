import React from 'react'
import image from '../assets/chair.png';
import styled from 'styled-components';
export default function OpeningHours() {




    const Hours = styled.div `

    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');

    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-attachment: fixed;
    z-index: 0;
    height: 100vh;
    overflow: auto;
    padding: 50px;
    text-align: center;
    color: white;
    h1{
        color: white;
        font-family: 'Quicksand', sans-serif;
        margin-bottom: 35px;
    }
    div{
        display:flex;
        justify-content: space-between;
        border-bottom: dashed 2px;
        font-size: 23px;
        font-weight: lighter;
        font-family: 'Quicksand', sans-serif;

    }
    p{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    `

    return (
        <Hours>
            <h1>Hours</h1>
            <div>
                <p>Monday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Tuesday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Wednesday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Thursday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Friday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Saturday</p>
                <p>08:00-19:00</p>
            </div>
            <div>
                <p>Sunday</p>
                <p>08:00-19:00</p>
            </div>
        </Hours>
    )
}
