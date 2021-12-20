import { useEffect, useState, useContext } from "react"
import ExamContext from "../../contexts/ExamContext"
import { getExamsBySubjectId, getExamsByTeacherId } from "../../services/api"

import Header from "../header/Header"

const Exams = () => {
  const [exams, setExams] = useState([])

  const { examFilter } = useContext(ExamContext)

  useEffect(() => {
    let isActive = true

    isActive && (async () => {
      let result

      try {
        if (examFilter === 'teacher') {
          result = await getExamsByTeacherId(1)
        }

        if (examFilter === 'subject') {
          result = await getExamsBySubjectId(3)
        }
      } catch (err) {
        console.log(err.response)
      }

      console.log(result.data)

      result?.data && setExams(result.data)
    })()

    return () => {
      isActive = false
    }
  }, [examFilter])

  return (
    <div>
      <Header />

      <ul>
        {exams.map((exam, index) => (
          <li key={index + 1}>
            <ul>
              <li><strong>{exam.name}</strong></li>
              <li>{exam.category}</li>
              <li><a target="_blank" href={exam.link} rel="noreferrer">link</a></li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exams
