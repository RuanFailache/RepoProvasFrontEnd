import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import ExamContext from "../../contexts/ExamContext"
import Header from "../header/Header"

const Home = () => {
  const { setExamFilter } = useContext(ExamContext)

  const navigateTo = useNavigate()

  const handleClick = (type) => {
    setExamFilter(type)
    navigateTo('/exams')
  }

  return (
    <div>
      <Header />

      <main>
        <h2>Escolha uma forma de busca</h2>

        <section>
          <div onClick={() => handleClick('teacher')}>
            <strong>Professores</strong>
          </div>

          <div onClick={() => handleClick('subject')}>
            <strong>Disciplinas</strong>
          </div>
        </section>
      </main>
    </div>
  )
}


export default Home
