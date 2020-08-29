import Link from 'next/link'
import React from 'react'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'
import { Container, TopBarContainer, HeaderContent } from './styles'

interface OwnProps {
  title: string
}

const PageHeader: React.FC<OwnProps> = ({ title, children }) => {
  return (
    <Container>
      <TopBarContainer>
        <Link href="/">
          <a>
            <img src={backIcon} alt="Voltar" />
          </a>
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>

        {children}
      </HeaderContent>
    </Container>
  )
}

export default PageHeader
