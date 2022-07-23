import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  background-image: linear-gradient(45deg, #ffe356 , #ffd500);


    
  h1 {
    color: black;
    background: transparent;
    font-size: 5vw;
    text-align: center;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 40px;    
  }

  @media (max-width: 450px) { 

  }

`
export const Contacts = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;   
  background: transparent;  
`
export const Emailform = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background: transparent;  


  h2 {    
    width: 100%;
    text-align: center;    
    color: black;
    margin: 0 auto; 
    background: transparent;    
  }

  form {    
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    background: transparent;

    input {
      width: 80%;
      margin: .5rem auto;
      padding: .5rem 1rem;
      text-align: start;

      font-size: 1rem;
      background-color: var(--white);
      color: var(--dark);
      border: 3px solid var(--dark);
      border-radius: 10px;

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 20px var(--blue);
      }
    }

    textarea {
      width: 80%;
      height: 100px;
      margin: 1rem auto;
      padding: 1rem;
      text-align: start;

      font-size: 1rem;
      background-color: var(--white);
      color: var(--dark);
      border: 3px solid var(--dark);
      border-radius: 10px;

      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 20px var(--blue);
      }
    }

    button {
      width: 250px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      justify-content: space-evenly;
      padding: .5rem 2.5rem;
      background-color: var(--dark);
      color: var(--white);
      border-radius: 5px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      border: 2px solid var(--blue);
      margin: 1rem auto;
      cursor: pointer;
      letter-spacing: 2px;
      transition: all ease 0.5s;

      &:hover { // Neon
        box-shadow: 0 0 30px var(--blue);
      }
    }

    @media (max-width: 450px) {      
      h2 {
        font-size:5vw;
      }
      .formulary_item{
        display:none;
      }
    }
  }
`
export const Socials = styled(motion.div)`
  color: var(--white);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  background: transparent;  

  h2 {
    color: black;
    margin-right: 2rem;
  }

  a {
    text-decoration: none;
    background: transparent;
  }

  .whatsapp {
    font-size: 3rem;
    color: black;
    margin-right: 2rem;
    background: transparent;

    :hover {
      transition: all ease 1s;
      color: white ;
    }
  }

  .linkedin {
    font-size: 3rem;
    color: black;
    background: transparent;

    &:hover {
      transition: all ease 1s;
      color: white;
    }
  }

  @media (max-width: 450px) {
    width: 80%;
    background: transparent;

    h2 {
      font-size: 1rem;
    }
  }
  
`
export const ImageStyled = styled(motion.div)`
  width: 50%;
  background-color: transparent;  

  @media (max-width: 450px) {
    display: none;
  }
  
  div{
    background: transparent;
  }

  svg {
    background: transparent;
        
  }
`

export const Lottie = styled(motion.div)`  
  background-color: var(--blue);  
`