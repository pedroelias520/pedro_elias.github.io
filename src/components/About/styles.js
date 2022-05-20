import styled from "styled-components";
import { motion } from 'framer-motion'

export const AboutStyled = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 10vh auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    justify-content: space-around;
    margin: 0 auto;
    height: auto;
    flex-wrap: wrap;
  }
`
export const ImageStyled = styled(motion.div)`
  width: 500px;  
  border-radius: 50em;    
  display: block;  
  align-content: center;  
  background: 
    linear-gradient(transparent, transparent) padding-box,
    linear-gradient(to right, orange, darkorchid) border-box;
  border-radius: 50em;
  border: 5px solid transparent;
  transition: all ease 1.5s;

  .neon {    
    border-radius: 50%;
  }
      
  img {    
    position: absolute;
    z-index:1;        
        
    top:0;
    bottom:0;
    left:0;
    right:0; 
  }
  
  &:hover {     
    border-radius: 50em;
    border: 10px solid transparent;
    animation: spin 2s infinite;
    transition: all ease 1.5s;  

    @keyframes spin {      
      100%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(360deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      90%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(320deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      80%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(280deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      70%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(240deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      60%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(200deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      50%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(160deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      40%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(120deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      30%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(80deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      20%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(40deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      10%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(0deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
      0%{
        background: linear-gradient(transparent, transparent) padding-box, linear-gradient(0deg, darkblue, orange) border-box;
        transition: all ease 3s;
      }
    }

  }

  @media (max-width: 450px) {
    width: 80%;
    text-align: center;
  }

  @media (max-width: 1030px) {
    width: 50%;
    margin: 0;
  }

`
export const TextArea = styled.div`
  width: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--blue);
    font-size: 50px;
    padding: 10px;
    margin-bottom: 20px;
  }

  p {
    color: var(--white);
    font-size: 24px;
    margin-bottom: 30px;

    span {
      color: var(--blue);
      font-weight: bold;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0;

    a {
      width: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;      
      text-decoration: none;
      justify-content: space-evenly;
      padding: 1rem 2.5rem;
      background-color: var(--dark);
      color: var(--white);      
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      border: 2px solid var(--blue);
      border-radius: 2rem;
      margin-right: 2rem;
      cursor: pointer;
      letter-spacing: 2px;
      transition: all ease 1.5s;            

      &:hover { // Neon
        box-shadow: inset 400px 0 0 0 var(--blue);        
          img {
            background-color: var(--blue);
            transition: all ease 1.5s
          }
      }
    }
  }

  @media (max-width: 450px) {
    width: 100%;
    margin: 0 auto;

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 1030px) {
    width: 60%;
    
    p {
      font-size: 1rem;
    }
  }
`



