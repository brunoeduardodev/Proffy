import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'

import {
  PageLanding,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  TotalConnections,
  PageLandingContent
} from '@styles/landing'

import giveClassesIcon from '../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../assets/images/icons/purple-heart.svg'
import studyIcon from '../assets/images/icons/study.svg'
import landingImg from '../assets/images/landing.svg'
import logoImg from '../assets/images/logo.svg'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Proffy</title>
      </Head>

      <PageLanding>
        <PageLandingContent className="container">
          <LogoContainer>
            <img src={logoImg} alt="proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </LogoContainer>
          <HeroImage src={landingImg} alt="Plataforma de estudos" />

          <ButtonsContainer>
            <Link href="study">
              <a href="study" className="study">
                <img src={studyIcon} alt="Estudar" />
                Estudar
              </a>
            </Link>
            <Link href="give-classes">
              <a href="" className="give-classes">
                <img src={giveClassesIcon} alt="Dar aula" />
                Dar aula
              </a>
            </Link>
          </ButtonsContainer>

          <TotalConnections>
            Total de 200 conexões já realizadas
            <img src={purpleHeartIcon} alt="Coração roxo" />
          </TotalConnections>
        </PageLandingContent>
      </PageLanding>
    </>
  )
}

export default Home
