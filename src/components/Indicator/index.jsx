import { HeroStyled, TextStyled, ImageStyled } from "./styles";
import { motion } from "framer-motion"

import Link from "next/link";
import Image from "next/image";
import Lottie from 'react-lottie';
import programming from '../../../public/img/lottie/person.json'
import github from '../../../public/img/icons/GitHub.svg'
import linkedin from '../../../public/img/icons/LinkedIn.svg'
import php from '../../../public/img/icons/php.svg'
import node from '../../../public/img/icons/npmjs.svg'
import kotlin from '../../../public/img/icons/kotlin.svg'
import javascript from '../../../public/img/icons/js.svg'
import flutter from '../../../public/img/icons/flutter.svg'


export const Indicator = () => {


  return (
  <HeroStyled>
    <TextStyled
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 2,
      delay: 0.8
    }}
    >

      Minhas<br/>
      <span>Habilidades</span>      
      
      <div>
  
          <motion.a className="button kotlin" href="https://www.linkedin.com/in/pedro-sousa-figueredo/"          
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 2.1,
            duration: 1,
          }}>
            <Image src={kotlin} alt="LinkedIn icon"/>
            Kotlin
          </motion.a>
      
        <motion.a className="button flutter" href="https://github.com/pedroelias520"
        
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 2,
            delay: 2.3,
            duration: 1,
          }}>
            <Image src={flutter} alt="GitHub icon"/>
            Flutter
          </motion.a>

          <motion.a className="button php" href="https://www.linkedin.com/in/pedro-sousa-figueredo/"
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 2.1,
            duration: 1,
          }}>
            <Image src={php} alt="LinkedIn icon"/>
            PHP
          </motion.a>
      
        <motion.a className="button nodejs" href="https://github.com/pedroelias520"
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 2,
            delay: 2.3,
            duration: 1,
          }}>
            <Image src={node} alt="GitHub icon"/>
            NodeJS
          </motion.a> 

          <motion.a className="javascript" href="https://github.com/pedroelias520"
          initial={{
            opacity: 0,
            y: 250
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 2,
            delay: 2.3,
            duration: 1,
          }}>
            <Image src={javascript} alt="GitHub icon"/>
            ECMA
          </motion.a>


      </div>
    </TextStyled>
            
  </HeroStyled>
  )
}