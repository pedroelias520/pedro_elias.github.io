import Image from 'next/image';

import embraer from '../../../public/img/embraer.jpg'
import mara from '../../../public/img/mara.png'
import doceamor from '../../../public/img/doceamor.png'

import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Carrousel, Container } from './styles';

import { Slide } from 'react-slideshow-image';
import { motion } from 'framer-motion';

export const Experiences = () => {
  const fadeImages = [
    embraer,
    mara,
    doceamor,
  ];

  const fadeProperties = {
    duration: 20000,
    canSwipe: false,
  };

  return (
    <Container id="experiences">

      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }} //onScroll
        transition={{ duration: 1, delay: 0.5, type: 'spring',
        stiffness: 80 }}
        viewport={{ once: true }} // only one time
      >
        Experiências e Freelances
      </motion.h1>

      <Carrousel>
          <Slide {...fadeProperties}>
            <div className="each-fade">
              <div className="text">
                <h2>Alpha Tech app</h2>
                <p>
                Estou desenvolvendo um sistema para automatização para Desktop feito em Javascript.
                </p>
                <p>
                Além de executar minhas funções, <span>melhora o meu trabalho</span> pois me ajuda a quantificar, projetar e agilizar a manutenção de computadores
                </p> 
                <p>
                participando de conversões, elaborando mapeamento de
                fluxo de valor, analisava erros em outros programas e os catalogava e usava a experiência de 2 anos de manutenção com computadores</p>                
                <div>
                  2022 - atualmente
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[0]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>

            <div className="each-fade">
               <div className="text">
                  <h2>Valuer Trade</h2>
                  <p>
                  Aplicativo feito para contabilizar operações na bolsa de valores feito em React Native.
                  </p>
                  <p>
                  Quando conversava com alguns amigos sobre a dificuldade de contabilizar as entradas e gerar relatórios sobre, então uma excelente alternativa foi criar uma aplicação para celular para contatbilizar todas as entradas e saidas 
                  </p>
                <div>
                  2021-2022
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[1]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>

            <div className="each-fade">
              <div className="text">
                <h2>Ewstore</h2>
                <p>
                  Um aplicativo de Ecomerce para uma loja de roupas criado em Flutter e Firebase 
                </p>
                <p>
                  Vendo que minha tia havia criado uma loja de roupas fui rápido em analisar uma forma de criar uma boa solução para aumentar as vendas dela. Um app capaz de criar postagens e mostrar para os clientes
                </p>
                <div>
                  2022 - Até o momento
                </div>
              </div>
              <div className="image">
                <Image src={fadeImages[2]}
                alt="Foto de perfil"
                layout="responsive" />
              </div>
            </div>
          </Slide>
      </Carrousel>
    </Container>
  );
};