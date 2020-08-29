import React from 'react'

import PageHeader from '@components/PageHeader'
import TeacherItem from '@components/TeacherItem'

import { PageTeacherList, InputBlock, SearchTeachers } from './styles'
const Study: React.FC = () => {
  return (
    <PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <SearchTeachers>
          <InputBlock>
            <label htmlFor="subject">Matrícula</label>
            <input type="text" id="subject" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </InputBlock>

          <InputBlock>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </InputBlock>
        </SearchTeachers>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </PageTeacherList>
  )
}

export default Study
