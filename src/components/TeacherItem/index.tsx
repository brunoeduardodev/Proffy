import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { Container } from './styles'

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/50559336?s=460&u=4b84284ab030757f687c1376a8b5ba168d7105f4&v=4"
          alt="Bruno Eduardo"
        />

        <div>
          <strong>Bruno Eduardo de Souza Medeiros</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Odio beatae aut neque quisquam reiciendis nihil iusto nam porro.
        Adipisci fuga minima veniam dolorum laudantium voluptate odio aspernatur
        modi, saepe illum.
      </p>
      <footer>
        <p>
          Preço/hora <strong>R$20.00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  )
}

export default TeacherItem
