import { AboutStyled, ImageStyled, TextArea, } from "./styles";
import Link from "next/link";

import Image from 'next/image'
import profilePicture from '../../../public/img/foto.png'
import downloadIcon from '../../../public/img/icons/download.svg'
import { motion } from 'framer-motion'


export const About = () => {


  return (
  <AboutStyled id="about">
    <ImageStyled
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: .7 }} //onScroll
      transition={{ duration: 1 }}
      viewport={{ once: true }} // only one time
    >
      
      <Image
          className="neon"
          src={profilePicture}
          alt="Foto de perfil"
          layout="responsive"
        />      
    </ImageStyled>

    <TextArea>
      <motion.h1 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} //onScroll
        transition={{ duration: 1, delay: 0.5, type: 'spring',
        stiffness: 80 }}
        viewport={{ once: true }} // only one time
      >
        Sobre mim
      </motion.h1>
        
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} //onScroll
        transition={{ duration: 3, delay: 1.2 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Desde muito cedo era <span>gamado em tecnologia</span>, passava horas na frente de um computador alterando parâmetros de jogos em um Windows 95 hahaha, e sou autodidata, aprendo as coisas com muita facilidade, a grande maioria das linguagens que sei aprendi sozinho, ainda mais porque sou um leitor nato, ler documentação não é um problema pra mim.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} //onScroll
        transition={{ duration: 3, delay: 1.7 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Sou <span>ágil, criativo</span>, consistente em aprender e <span>resiliente com problemas</span>, adoro superar desafios! Devido minhas experiência com o setor de suporte a sistemas operacionais, desenvolvi uma habilidade de me comunicar tanto com o cliente quando com outros parceiros de equipe, como diz o ditado: <span>união faz a força</span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}} //onScroll
        transition={{ duration: 3, delay: 2.2 ,type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
      Meu objetivo é ser um programador com excelência, trabalho sempre com eficiência e dedicação, meus estudos são constantes, a todo momento estou procurando melhorar em algo, se motivado (e com um pouco de café) posso construir soluções com muita facilidade, e se não souber alguma coisa, estudo e aprendo, o ditado que me define é 
      
      <span> Obsessão vence o talento</span>
  
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 350 }}
        whileInView={{ opacity: 1, y: 0 }} //onScroll
        transition={{ duration: 3 , type: 'spring',
        stiffness: 30 }}
        viewport={{ once: true }} // only one time
      >
        <Link 
        href="https://drive.google.com/file/d/1tP_z8AjzAdVUJi5p_i4M_l7EGayyKttu/view?usp=sharing"
         >
            <a target="_blank">
              <Image src={downloadIcon} alt="LinkedIn icon"/>
              Meu curriculo
            </a>
        </Link>
      </motion.div>
    </TextArea>

    
  </AboutStyled>
  )
}