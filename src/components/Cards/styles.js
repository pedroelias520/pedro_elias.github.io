import styled from "styled-components";
import { motion } from 'framer-motion'

export const Content = styled(motion.article)`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;

  @media (max-width: 450px) {
    width: 90%;
  }


`

export const ImageStyled = styled.div`
  width: 100%;
`

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 1rem;
  color: var(--white);

  span {
    color: var(--blue);
  }

  p {
    width: 100%;
    text-align: center;
    margin: 1rem auto;
  }

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
    font-size: 10px;
    line-height: 19px;
    border: 2px solid var(--blue);
    border-radius: 2rem;
    margin-right: 2rem;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all ease 1.5s;          

    img{
      background: transparent;
    }

    span {
      color: var(--white);
      background: transparent;
    }
    &:hover { // Neon
      box-shadow: inset 400px 0 0 0 var(--blue);                              
    }
  }
`