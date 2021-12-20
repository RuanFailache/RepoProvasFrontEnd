import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState, useMemo } from 'react'

import Exams from './components/exams/Exams'
import Home from './components/home/Home'
import ExamContext from './contexts/ExamContext'
import NewExam from './components/exams/NewExam'

const App = () => {
  const [examFilter, setExamFilter] = useState('teacher')

  const examState = useMemo(() => ({
    examFilter,
    setExamFilter
  }), [examFilter])

  return (
    <BrowserRouter>
      <ExamContext.Provider value={examState}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/register" element={<NewExam />} />
        </Routes>
      </ExamContext.Provider>
    </BrowserRouter>
  )
}

export default App
