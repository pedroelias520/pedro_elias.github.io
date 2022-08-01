import Lottie from "react-lottie"

import { Contacts, Container, Emailform, Socials, ImageStyled } from "./styles"
import EmailMessage from '../../../public/img/lottie/email.json'
import { SiWhatsapp } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'

export const Contact = () => {
  return (
    <Container id="contact">

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} //onScroll
        transition={{ duration: 1, delay: 0.5, type: 'spring',
        stiffness: 80 }}
        viewport={{ once: true }} // only one time
      >
        Precisa de um sistema personlizado?
      </motion.h1>

      <Contacts>

        <Emailform>

          <ImageStyled
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }} //onScroll
            transition={{ duration: 3 }}
            viewport={{ once: true }} // only one time
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                speed: 3,
                animationData: EmailMessage,
              }}
            />        
          </ImageStyled>
          
          <form action="https://formsubmit.co/epedro520@gmail.com" method="POST">
            
            <h2>Entre em contato comigo</h2>

            <input
            type="hidden"
            name="_next"
            value="https://pedro-elias-portifolio.herokuapp.com/emailsent" />

            <input
            type="hidden"
            name="_autoresponse"
            value="Recebi sua mensagem, muito obrigado por entrar em contato! Responderei o mais rápido possível..." />
            
            <motion.input 
            type="text" 
            name="name" 
            className="formulary_item"
            placeholder="Digite seu nome"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 1 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            required
            />

            <motion.input 
            type="email" 
            name="email"
            className="formulary_item" 
            placeholder="Digite seu email"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 1.5 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            required
            />

            <motion.input 
            type="text" 
            className="formulary_item"
            name="subject" 
            placeholder="Assunto"
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 2 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time/
            required
            />

            <motion.textarea  
            name="message" 
            className="formulary_item"
            placeholder="Digite uma mensagem..."
            //motion bellow
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 2.5 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            required
            />
            
            <motion.button type="submit"
            className="formulary_item"
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 3 ,type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            >
              <AiOutlineMail />
              Enviar!
            </motion.button>

            <Socials
            initial={{ opacity: 0, opacity: 0 }}
            whileInView={{ opacity: 1, opacity: 1 }} //onScroll
            transition={{ duration: 3, delay: 3.5, type: 'spring',
            stiffness: 30 }}
            viewport={{ once: true }} // only one time
            >              
              <a href="https://api.whatsapp.com/send?phone=5589994285712&text=%20Ol%C3%A1%2C%20tudo%20bem%2C%20vi%20sua%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20seus%20servi%C3%A7os." _blank="true">
                <SiWhatsapp className="whatsapp" />
              </a>
              <a href="https://github.com/pedroelias520">
                <SiLinkedin className="linkedin" />
              </a>
              
            </Socials>

          </form>

        </Emailform>

        

      </Contacts>
    </Container>
  )
}