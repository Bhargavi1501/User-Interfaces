import React from 'react'
import styled from 'styled-components'
export default function OrderSummary() {

    const backpack ={
      lid:true,
      Height: 26,
      Weight: "5kg",
      color:"black"
    };
    const bucket={
      color: "blue",
      volume: 30,
    };
    console.log(backpack);
     const ImgTag = styled.img`
        max-width : 100%;
        padding-left: 600px;
        padding-top: 100px;
     `;    
  return (
    <div>
      <header>
               <ImgTag src="./assets/illustration-hero.svg" alt="Illustration hero"/>
      </header>
      
    </div>
  )
}
