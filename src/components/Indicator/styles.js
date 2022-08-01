import styled from "styled-components";
import { motion } from "framer-motion"

export const HeroStyled = styled.main`
  width: 100vw;
  max-width: 1200px;
  margin: 10vh auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const TextStyled = styled(motion.article)`  
  width: 100%;
  height: 500px;
  padding: 2rem 0;
  color: var(--white);
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  margin: auto auto auto auto;    
  text-transform: uppercase;  

  @media (max-width: 450px) {
    margin: 3rem auto;
    width: 100%;
    height: auto;
    font-size: 1.5rem;
    text-align: center;
  }

  span {
    font-size: 63px;
    color: var(--blue);    
    
    @media (max-width: 450px) {
      font-size: 7vw;
    }
  }

  div {
    display: grid;    
    width:100%;    
    row-gap: 30px;    
    grid-template-columns: auto auto auto;
    width: 90%;        
    margin: 50px auto auto auto;    

    a {      
      width: 250px;
      height: 100px;
      display: flex;
      flex-direction: row;
      align-items: center;      
      text-decoration: none;
      justify-content: space-evenly;
      padding: 1rem 2.5rem;
      background-image: linear-gradient(45deg, #8400ff , #4c0093);
      color: var(--white);      
      font-weight: 600;
      font-size: 1vw;
      line-height: 19px;      
      border-radius: 2rem;
      margin-right: 2rem;
      cursor: pointer;
      letter-spacing: 2px;
      transition: all ease 1.5s;      
      transform: skew(-20deg);      
      

      img{        
        background-color: transparent;
        filter: invert(100%)
      }

      &:hover { // Neon
        box-shadow: inset 400px 0 0 0 var(--blue); 
        animation: shine 5s infinite;
        transition: all ease 1.0s;        
      }
    }

    .kotlin{
      grid-column: 1
      grid-row: 1      
    }

    .flutter {
      grid-column: 2
      grid-row: 1
    }

    php{
      grid-column: 1
      grid-row: 2
    }

    nodejs{
      grid-column: 2
      grid-row: 2
    }

    javascript{
      grid-column: 2
      grid-row: 3
    }

    @media (max-width: 450px) {
      width: 90%;
      display: grid;
      row-gap: 10px;    
      grid-template-columns: auto auto;
      justify-content: space-around;
      margin: 3rem auto 0;

      a {
        width: 150px;
        margin: 0;
        font-size: 3vw;
        padding: 0.5rem 1rem;
        align-items: center;
        justify-content: space-around;
        transform: skew(-20deg);
      }
    }
  }

`
export const ImageStyled = styled(motion.div)`
  width: 30vw;
  margin: 0 auto;

  @media (max-width: 450px) {
   width: 5vw;
   margin: 0 auto;
  }

  @media (max-width: 1150px) {
   width: 60vw;
   margin: 0 auto;
  }
`
