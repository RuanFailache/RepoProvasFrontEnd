import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getSubjects, getTeachersBySubjectId, postExams } from "../../services/api";

const NewExam = () => {
  const [subjects, setSubjects] = useState(null)
  const [teachers, setTeachers] = useState(null)

  const [name, setName] = useState('')
  const [category, setCategory] = useState('P1')
  const [selectedSubjectId, setSelectedSubjectId] = useState(1)
  const [selectedTeacherId, setSelectedTeacherId] = useState(1)
  const [link, setLink] = useState('')

  const navigateTo = useNavigate()

  useEffect(() => {
    let isActive = true;

    isActive && (async () => {
      try {
        const result = await getSubjects()
        setSubjects(result.data)
      } catch (err) {
        console.log(err)
      }
    })()

    return () => {
      isActive = false;
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postExams({
      name,
      category,
      teacherId: selectedTeacherId,
      subjectId: selectedSubjectId,
      link,
    })

    navigateTo('/')
  }

  const handleChangeSubject = async (e) => {
    e.preventDefault()

    const subjectId = e.nativeEvent.target.value
    const result = await getTeachersBySubjectId(subjectId)
    const teacher = result.data

    setTeachers(teacher)
    setSelectedSubjectId(subjectId)
    setSelectedTeacherId(teacher[0].id)
  }

  return (
    <div>
      <h1>REPO PROVAS</h1>
      <h2>Contribua conosco! Cadastre sua prova inserindo as informações abaixo:</h2>

      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da prova" />

        <select onChange={(e) => setCategory(e.nativeEvent.target.value)}>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
          <option value="2ch">2ch</option>
          <option value="Outras">Outras</option>
        </select>

        <select onClick={handleChangeSubject} onChange={handleChangeSubject}>
          {subjects?.map(subject => <option value={subject.id}>{subject.name}</option>)}
        </select>

        {teachers && (
          <select onChange={(e) => setSelectedTeacherId(e.target.value)} >
            {teachers.map((teacher => <option value={teacher.id}>{teacher.name}</option>))}
          </select>
        )}

        <input valueu={link} onChange={(e) => setLink(e.target.value)} placeholder="Digite o link do pdf da prova aqui" />

        <button type="submit">Cadastre sua prova!</button>
      </form>
    </div>
  )
}

export default NewExam
